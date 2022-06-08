<template>
  <div class="text-center q-mt-lg">
    <img
      src="img/BoneHeadAudio.png"
      alt="BoneHeadLogo"
      width="200"
      style="margin-top: 10%; margin-bottom: 10%"
    />

    <div class="text-h3">Brand</div>

    <div class="text-positive q-mt-lg">{{ state.status }}</div>
    <q-select
      class="q-mt-lg q-ml-lg"
      v-if="state.categories.length > 0"
      style="width: 50vw; margin-bottom: 4vh; background-color: #fff"
      :option-value="'id'"
      :option-label="'name'"
      v-model="state.selectedCategoryId"
      :options="state.categories"
      label="Select a Category"
      emit-value
      map-options
      @update:model-value="loadMenuitems()"
    />
    <div
      class="text-h6 text-bold text-center text-primary"
      v-if="state.menuitems.length > 0"
    >
      {{ state.selectedCategory.name }} Products
    </div>
    <q-scroll-area style="height: 55vh">
      <q-card class="q-ma-md">
        <q-list separator>
          <q-item
            v-for="item in state.menuitems"
            :key="item.id"
            clickable
            @click="selectMenuItem(item.id)"
          >
            <q-item-section avatar>
              <q-avatar style="height: 125px; width: 125px" square>
                <img :src="`/img/${item.graphicName}`" />
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-left">
              {{ item.productName }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-scroll-area>
  </div>
  <q-dialog
    v-model="state.itemSelected"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card>
      <q-card-actions align="right">
        <q-btn
          flat
          icon="close"
          color="primary"
          v-close-popup
          class="text-h5"
        />
      </q-card-actions>
      <q-card-section class="q-pa-none text-center">
        <img
          :src="`/img/${state.selectMenuItem.graphicName}`"
          style="height: 200px; margin: 10%"
        />
      </q-card-section>
      <div class="text-h4 text-blue-9 text-center">
        {{ state.selectMenuItem.productName }} -
        <span style="font-weight: bold">
          {{ formatCurrency(state.selectMenuItem.msrp) }}</span
        >
      </div>
      <div class="text-left q-ma-lg">
        {{ state.selectMenuItem.description }}
      </div>
      <q-card-section>
        <div class="row">
          <div class="col-2 q-mr-lg">
            <q-input
              v-model.number="state.qty"
              type="number"
              filled
              style="max-width: 15vw"
              placeholder="qty"
              hint="Qty"
              dense
            />
          </div>
        </div>
        <div class="row justify-center q-mb-md">
          <q-btn
            icon="add_shopping_cart"
            color="primary"
            label="Add To Cart"
            :disable="state.qty < 0"
            @click="addToTray()"
          />
        </div>

        <div class="row justify-center">
          <q-btn
            icon="shopping_cart"
            color="primary"
            label="View Cart"
            :disable="state.tray.length < 1"
            @click="viewTray()"
          />
        </div>
      </q-card-section>
      <q-card-section class="text-center text-positive">
        {{ state.dialogStatus }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import { useRouter } from "vue-router";
import { formatCurrency } from "../utils/formatutils";
import { reactive, onMounted } from "vue";
import { fetcher } from "../utils/apiutil";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      loadCategories();
    });

    let state = reactive({
      status: "",
      categories: [],
      menuitems: [],
      selectedCategoryId: "",
      selectedCategory: {},
      selectMenuItem: {},
      qty: 0,
      tray: [],
      dialogStatus: "",
      itemSelected: false,
    });

    const addToTray = () => {
      let index = -1;
      if (state.tray.length > 0) {
        index = state.tray.findIndex(
          (item) => item.id === state.selectMenuItem.id
        );
      }

      if (state.qty > 0) {
        index === -1
          ? state.tray.push({
              id: state.selectMenuItem.id,
              qty: state.qty,
              product: state.selectMenuItem,
            })
          : (state.tray[index] = {
              id: state.selectMenuItem.id,
              qty: state.qty,
              product: state.selectMenuItem,
            });
        state.dialogStatus = `${state.qty} item(s) added`;
      } else {
        index === -1 ? null : state.tray.splice(index, 1);
        state.dialogStatus = `item(s) removed`;
      }
      sessionStorage.setItem("tray", JSON.stringify(state.tray));
      state.qty = 0;
    };

    const loadMenuitems = async () => {
      try {
        state.selectedCategory = state.categories.find(
          (category) => category.id === state.selectedCategoryId
        );
        state.status = `finding products for brand ${state.selectedCategory}...`;
        state.menuitems = await fetcher(`Product/${state.selectedCategory.id}`);
        state.status = `loaded ${state.menuitems.length} products for
${state.selectedCategory.name}`;
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const selectMenuItem = async (menuitemid) => {
      try {
        // q-item click sends us the id, so we need to find the object
        state.selectMenuItem = state.menuitems.find(
          (item) => item.id === menuitemid
        );
        state.itemSelected = true;
        state.dialogStatus = "";
        if (sessionStorage.getItem("tray")) {
          state.tray = JSON.parse(sessionStorage.getItem("tray"));
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const loadCategories = async () => {
      try {
        state.status = "loading categories...";
        const payload = await fetcher(`Category`);
        if (payload.error === undefined) {
          state.categories = payload;
          state.status = `loaded ${state.categories.length} brands`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const viewTray = () => {
      router.push("tray");
    };

    return {
      state,
      loadMenuitems,
      selectMenuItem,
      addToTray,
      formatCurrency,
      viewTray,
    };
  },
};
</script>
