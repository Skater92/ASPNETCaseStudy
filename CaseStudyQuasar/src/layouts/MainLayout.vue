<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Info3067 Case Study </q-toolbar-title>

        <q-btn flat round dense icon="reorder" class="q-mr-xs">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/">
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="brands">
                <q-item-section>Brands</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="tray">
                <q-item-section>Cart</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="register">
                <q-item-section>Register Account</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="login">
                <q-item-section>Login Account</q-item-section>
              </q-item>
              <q-item clickable v-close-popup to="logout">
                <q-item-section>Logout Account</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center text-subtitle2">
            Best viewed on mobile device — Matt Daly &copy;{{
              new Date().getFullYear()
            }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>
