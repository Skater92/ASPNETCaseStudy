<template>
  <div class="text-h4 text-center q-mt-md q-mb-md">Register</div>
  <div class="text-title2 text-center text-positive text-bold q-mt-sm">
    {{ state.status }}
  </div>
  <q-card class="q-ma-md q-pa-md">
    <q-form
      ref="myForm"
      class="q-gutter-md"
      greedy
      @submit="register"
      @reset="resetFields"
    >
      <q-input
        outlined
        placeholder="Enter first name"
        id="firstname"
        v-model="state.firstname"
        :rules="[isRequired]"
      />
      <q-input
        outlined
        placeholder="Enter last name"
        id="lastname"
        v-model="state.lastname"
        :rules="[isRequired]"
      />
      <q-input
        outlined
        placeholder="Enter email address"
        id="email"
        v-model="state.email"
        :rules="[isRequired, isValidEmail]"
      />
      <q-input
        outlined
        placeholder="Enter password"
        id="password"
        type="password"
        v-model="state.password"
        :rules="[isRequired]"
        autocomplete="on"
      />
      <q-btn label="Register" type="submit" />
      <q-btn label="Reset" type="reset" />
    </q-form>
  </q-card>
</template>
<script>
import { reactive } from "vue";
import { poster } from "../utils/apiutil";
export default {
  setup() {
    let state = reactive({
      status: "",
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    });
    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email";
    };
    const isRequired = (val) => {
      return !!val || "Field is required";
    };
    const register = async () => {
      state.status = "Registering with server";
      let userHelper = {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password,
      };
      try {
        let payload = await poster("register", userHelper);
        state.status = payload.token;
      } catch (err) {
        state.status = err.message;
      }
    };
    const resetFields = () => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.password = "";
      state.status = "";
    };
    return {
      state,
      register,
      isValidEmail,
      isRequired,
      resetFields,
    };
  },
};
</script>
