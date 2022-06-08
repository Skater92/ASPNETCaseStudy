<template>
  <div class="text-center">
    <div row>
      <div class="text-h4 q-mt-xl text-primary">
        Cart Contents
        <q-icon name="shopping_cart" size="100" class="q-mr-md" />
      </div>
    </div>
    <img
      src="img/BoneHeadAudio.png"
      alt="BoneHeadLogo"
      width="200"
      style="margin-top: 10%; margin-bottom: 10%"
    />
    <div class="text-h6 q-mt-lg text-positive">{{ state.status }}</div>
  </div>
  <div
    v-if="state.tray.length > 0"
    style="width: 90vw; margin-left: 5vw; margin-top: 1vh"
  >
    <div>
      <q-item style="bottom: -2vh">
        <q-item-section class="col-2 q-ml-sm text-h6 text-primary"
          >QTY</q-item-section
        >
        <q-item-section class="q-ml-sm text-h6 text-primary"
          >ITEM</q-item-section
        >
        <q-item-section class="q-ml-sm text-h6 text-primary"
          >MSRP</q-item-section
        >
        <q-item-section class="q-ml-sm text-h6 text-primary"
          >TOTAL</q-item-section
        >
      </q-item>
      <q-scroll-area style="height: 40vh">
        <q-card class="q-ma-md">
          <q-list separator>
            <q-item v-for="item in state.tray" :key="item.id" clickable>
              <q-item-section class="col-2">
                {{ item.qty }}
              </q-item-section>
              <q-item-section class="text-left">
                {{ item.product.productName }}
              </q-item-section>
              <q-item-section class="text-left">
                {{ formatCurrency(item.product.msrp) }}
              </q-item-section>
              <q-item-section class="text-left">
                {{ formatCurrency(item.product.msrp * item.qty) }}
              </q-item-section>
            </q-item>
            <q-item row="q-mx-md">
              <q-item-section class="text-bold"> Subtotal: </q-item-section>
              <div class="row justify-end">
                <q-item-section class="q-mr-lg">
                  {{
                    formatCurrency(
                      state.tray.reduce((acc, item) => {
                        return acc + item.product.msrp * item.qty;
                      }, 0)
                    )
                  }}
                </q-item-section>
              </div>
            </q-item>

            <q-item row="q-mx-md">
              <q-item-section class="text-bold"> HST (13%): </q-item-section>
              <div class="row justify-end">
                <q-item-section class="q-mr-lg">
                  {{
                    formatCurrency(
                      state.tray.reduce((acc, item) => {
                        return acc + item.product.msrp * item.qty * 0.13;
                      }, 0)
                    )
                  }}
                </q-item-section>
              </div>
            </q-item>

            <q-item class="justify-center">
              <q-item-section class="text-primary text-bold">
                Total:
              </q-item-section>
              <div class="row justify-end">
                <q-item-section class="text-primary q-mr-lg">
                  {{
                    formatCurrency(
                      state.tray.reduce((acc, item) => {
                        return acc + item.product.msrp * item.qty * 1.13;
                      }, 0)
                    )
                  }}
                </q-item-section>
              </div>
            </q-item>
          </q-list>
        </q-card>
      </q-scroll-area>
    </div>
    <div row>
      <div class="text-center q-mb-xl">
        <q-btn
          class="q-ma-sm"
          color="primary"
          icon="shopping_cart"
          label="Checkout"
          :disable="state.tray.length < 1"
          @click="saveTray()"
        />
        <q-btn
          glossy
          color="negative"
          icon="remove_shopping_cart"
          class="q-ma-sm"
          @click="clearTray()"
          label="Empty Cart"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import { fetcher } from "../utils/apiutil";
import { useRouter } from "vue-router";
import { poster } from "../utils/apiutil";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      loadCategories();
    });

    let state = reactive({
      status: "",
      fbrTot: 0,
      calTot: 0,
      saltTot: 0,
      fatTot: 0,
      cholTot: 0,
      proTot: 0,
      carbTot: 0,
      tray: [],
    });

    onMounted(() => {
      if (sessionStorage.getItem("tray")) {
        state.tray = JSON.parse(sessionStorage.getItem("tray"));
        state.tray.forEach((trayItem) => {});
      } else {
        state.tray = [];
      }
    });

    const loadCategories = async () => {
      try {
        state.status = "loading categories...";
        const payload = await fetcher(`Category`);
        if (payload.error === undefined) {
          state.categories = payload;
          state.status = `loaded ${state.categories.length} categories`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const saveTray = async () => {
      let Customer = JSON.parse(sessionStorage.getItem("user"));
      let Order = JSON.parse(sessionStorage.getItem("tray"));
      try {
        state.status = "Sending Cart to Server...";
        let cartHelper = { email: Customer.email, selections: Order };
        let payload = await poster("order", cartHelper);
        if (payload.indexOf("not") > 0) {
          state.status = payload;
        } else {
          clearTray();
          state.status = payload;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error add cart: ${err}`;
      }
    };

    const loadMenuitems = async () => {
      try {
        state.selectedCategory = state.categories.find(
          (category) => category.id === state.selectedCategoryId
        );
        state.status = `finding menuitems for category ${state.selectedCategory}...`;
        state.menuitems = await fetcher(
          `Menuitem/${state.selectedCategory.id}`
        );
        state.status = `loaded ${state.menuitems.length} menu items for ${state.selectedCategory.name}`;
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const selectMenuItem = async (menuitemid) => {
      try {
        state.selectedMenuItem = state.menuitems.find(
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

    const addToTray = () => {
      let index = -1;
      if (state.tray.length > 0) {
        index = state.tray.findIndex(
          (item) => item.id === state.selectedMenuItem.id
        );
      }

      if (state.qty > 0) {
        index === -1
          ? state.tray.push({
              id: state.selectedMenuItem.id,
              qty: state.qty,
              item: state.selectedMenuItem,
            })
          : (state.tray[index] = {
              id: state.selectedMenuItem.id,
              qty: state.qty,
              item: state.selectedMenuItem,
            });
        state.dialogStatus = `${state.qty} item(s) added`;
      } else {
        index === -1 ? null : state.tray.splice(index, 1);
        state.dialogStatus = `item(s) removed`;
      }
      sessionStorage.setItem("tray", JSON.stringify(state.tray));
      state.qty = 0;
    };

    const viewTray = () => {
      router.push("tray");
    };

    const clearTray = () => {
      sessionStorage.removeItem("tray");
      state.tray = [];
      state.status = "CALAMITY! CART IS EMPTY";
    };

    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };

    return {
      state,
      loadMenuitems,
      selectMenuItem,
      addToTray,
      viewTray,
      clearTray,
      formatCurrency,
      saveTray,
    };
  },
};
</script>
