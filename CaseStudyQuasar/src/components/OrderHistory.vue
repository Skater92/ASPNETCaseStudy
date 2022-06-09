<template>
  <div class="text-center">
    <div class="text-h5 q-mt-md">Order History</div>
    <div class="text-positive text-h6 q-mt-lg q-mb-lg">
      {{ state.status }}
    </div>
  </div>

  <q-card class="q-ma-sm">
    <q-list highlight bordered separator>
      <q-item>
        <q-item-section>
          <q-item-label class="q-mx-lg">Order #</q-item-label>
        </q-item-section>
        <q-item-section>OrderDate</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        :active="active"
        color="primary"
        v-for="order in state.orders"
        :key="order.id"
        @click="selectOrder(order.id)"
      >
        <q-item-section class="text-weight-bold q-mx-lg">
          {{ order.id }}
        </q-item-section>
        <q-item-section class="text-weight-bold q-mx-xl">
          {{ formatDate(order.orderdate) }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>

  <q-dialog
    v-model="state.selectedAnOrder"
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card>
      <q-card-actions align="right">
        <q-btn
          flat
          icon="close"
          color="negative"
          v-close-popup
          class="text-h5"
        />
      </q-card-actions>

      <q-card-section>
        <div class="text-h5 text-center">
          Order: #{{ state.orderDetails[0].cartID }}
        </div>
      </q-card-section>
      <q-card-section class="row justify-center text-center">
        <q-avatar square size="150px">
          <img :src="`img/BoneHeadAudio.png`" />
        </q-avatar>
      </q-card-section>
      <q-card-section class="q-mb-none">
        <q-card-section class="row text-center text-weight-bold text-primary">
          <q-item-section>
            <q-item-label class="q-mx-lg">Name</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-mx-lg">Quantities</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="q-mx-lg">Extended</q-item-label>
          </q-item-section>
        </q-card-section>
        <q-card-section class="q-mt-none">
          <q-card-section
            class="row justify-center text-weight-bold text-primary"
          >
            <q-item-section class="text-center col-1"> S </q-item-section>
            <q-item-section class="text-center col-1"> O </q-item-section>
            <q-item-section class="text-center col-1"> B </q-item-section>
          </q-card-section>
        </q-card-section>

        <q-list bordered separator>
          <q-item v-for="detail in state.orderDetails" :key="detail.cartID">
            <q-item-section class="text-left col-4 text-weight-bold">
              {{ detail.prodName }}
            </q-item-section>
            <q-item-section class="text-center col-1">
              {{ detail.qtySo }}
            </q-item-section>
            <q-item-section class="text-center col-1">
              {{ detail.qtyOr }}
            </q-item-section>
            <q-item-section class="text-center col-1">
              {{ detail.qtyBa }}
            </q-item-section>
            <q-item-section class="text-center col-3">
              {{ formatCurrency(detail.ext) }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-section class="row justify-end">
        <div style="font-weight: bold; font-size: larger">SubTotal:</div>
        <div class="q-mx-xl">
          {{
            formatCurrency(
              state.orderDetails.reduce((acc, orderDetail) => {
                return (
                  acc +
                  orderDetail.ext * orderDetail.qtySo +
                  orderDetail.ext * orderDetail.qtyBa
                );
              }, 0)
            )
          }}
        </div>
      </q-card-section>
      <q-card-section class="row justify-end">
        <div style="font-weight: bold; font-size: larger">HST(13%):</div>
        <div class="q-mx-xl">
          {{
            formatCurrency(
              state.orderDetails.reduce((acc, orderDetail) => {
                return (
                  acc +
                  (orderDetail.ext * orderDetail.qtySo +
                    orderDetail.ext * orderDetail.qtyBa) *
                    0.13
                );
              }, 0)
            )
          }}
        </div>
      </q-card-section>
      <q-card-section class="row justify-end">
        <div style="font-weight: bold; font-size: larger">Total:</div>
        <div class="q-mx-xl">
          {{
            formatCurrency(
              state.orderDetails.reduce((acc, orderDetail) => {
                return (
                  acc +
                  (orderDetail.ext * orderDetail.qtySo +
                    orderDetail.ext * orderDetail.qtyBa -
                    (orderDetail.ext * orderDetail.qtySo +
                      orderDetail.ext * orderDetail.qtyBa) *
                      0.13)
                );
              }, 0)
            )
          }}
        </div>
      </q-card-section>
      <q-card-section
        class="text-center text-positive text-h6 q-mb-xs q-mt-lg q-pa-none"
      >
        {{ state.dialogStatus }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
import { reactive, onMounted } from "vue";
import { fetcher } from "../utils/apiutil";
export default {
  setup() {
    let state = reactive({
      status: "",
      orders: [],
      dialogStatus: "",
      selectedAnOrder: false,
      orderDetails: [],
      orderSelected: {
        id: "",
        orderdate: "",
        cartId: 0,
        prodId: "",
        CustomerID: 0,
        ProdName: "",
        QtySo: 0,
        QtyOr: 0,
        QtyBa: 0,
        Ext: 0.0,
      },
    });
    onMounted(() => {
      loadOrders();
    });
    const loadOrders = async () => {
      try {
        let user = JSON.parse(sessionStorage.getItem("user"));
        const payload = await fetcher(`order/${user.email}`);
        if (payload.error === undefined) {
          state.orders = payload;
          state.status = `Loaded ${state.orders.length} Order(s)`;
        } else {
          state.status = payload.error;
        }
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const selectOrder = async (orderId) => {
      try {
        let user = JSON.parse(sessionStorage.getItem("user"));

        const payload = await fetcher(`order/${orderId}/${user.email}`);
        state.orderDetails = payload;
        state.dialogStatus = `Details for Order #${orderId}`;
        state.selectedAnOrder = true;
        state.orderSelected = state.orders.find(
          (order) => order.id === orderId
        );
      } catch (err) {
        console.log(err);
        state.status = `Error has occured: ${err.message}`;
      }
    };

    const formatDate = (date) => {
      let d;
      // see if date is coming from server
      date === undefined ? (d = new Date()) : (d = new Date(Date.parse(date))); // from server
      let _day = d.getDate();
      let _month = d.getMonth() + 1;
      let _year = d.getFullYear();
      let _hour = d.getHours();
      let _min = d.getMinutes();
      if (_min < 10) {
        _min = "0" + _min;
      }
      return _year + "-" + _month + "-" + _day + ", " + _hour + ":" + _min;
    };

    const formatCurrency = (value) => {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    };

    return {
      state,
      formatDate,
      selectOrder,
      formatCurrency,
    };
  },
};
</script>
