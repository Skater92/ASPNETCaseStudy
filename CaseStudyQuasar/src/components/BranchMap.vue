<template>
  <div class="text-center q-mt-md">
    <div class="text-h4">TomTom Map Ex3</div>
    <div class="text-h6">show map with marker</div>
    <div>
      <q-input
        class="q-ma-lg text-h5"
        placeholder="Enter search Postal Code"
        id="address"
        v-model="state.address"
      />
      <br />
    </div>
    <q-btn
      icon="map"
      label="Search"
      color="primary"
      @click="genMap"
      class="q-mb-md"
      style="width: 30vw"
    />
    <div
      style="height: 50vh; width: 90vw; margin-left: 5vw; border: solid"
      ref="mapRef"
      v-show="state.showmap === true"
    ></div>
  </div>
</template>
<script>
import { store } from "quasar/wrappers";
import { ref, reactive } from "vue";
import { fetcher } from "src/utils/apiutil";
export default {
  name: "branch_map",
  setup() {
    const mapRef = ref(null);
    let state = reactive({
      status: "",
      address: "",
      showmap: false,
    });

    const genMap = async () => {
      try {
        state.showmap = true;
        const tt = window.tt;
        let url = `https://api.tomtom.com/search/2/geocode/${state.address}.json?key=ILBxYk9IKgYvFxgGvcBVSmeyxXzLs0g2`;
        let response = await fetch(url);
        let payload = await response.json();

        let lat = payload.results[0].position.lat;
        let lon = payload.results[0].position.lon;
        try {
          let response2 = await fetcher(`Branch/${lat}/${lon}`);
          let threeStores = response2.slice(0, 3);
          let map = tt.map({
            key: "ILBxYk9IKgYvFxgGvcBVSmeyxXzLs0g2",
            container: mapRef.value,
            source: "vector/1/basic-main",
            center: [lon, lat],
            zoom: 12,
          });
          map.addControl(new tt.FullscreenControl());
          map.addControl(new tt.NavigationControl());

          //place markers in store location
          threeStores.forEach((store) => {
            console.log(store.latitude, store.longitude, store.street);
            let marker = new tt.Marker()
              .setLngLat([store.longitude, store.latitude])
              .addTo(map);
            let popupOffset = 25;
            let popup = new tt.Popup({ offset: popupOffset });
            popup.setHTML(
              `<div id="popup">Store#: ${store.id}</div><div>${store.street}, ${
                store.city
              }
            <br/>${store.distance.toFixed(2)} Km</div>`
            );
            marker.setPopup(popup);
          });
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        state.status = err.message;
      }
    };
    return {
      mapRef,
      state,
      genMap,
    };
  },
};
</script>
