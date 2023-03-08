<template>
  <div class="h-100 bg-tonal">
    <div class="row h-screen">
      <div
        class="col-6 bg-primary d-flex flex-column justify-center align-center"
      >
        <div class="text-h5">Login to</div>
        <div class="text-h4">StockAnts</div>
      </div>
      <div class="col-6 d-flex justify-center align-center">
        <div class="container">
          <v-card width="100%">
            <v-card-text>
              <div class="text-primary font-weight-bold text-h4">
                Welcome back
              </div>
              <v-form class="mt-2">
                <v-text-field
                  v-model="form.email"
                  dense
                  variant="outlined"
                  label="Email"
                  placeholder="Enter Email Address"
                  :error-messages="v$.email.$errors.map((e) => e.$message)"
                  required
                  @input="v$.email.$touch"
                  @blur="v$.email.$touch"
                />
                <v-text-field
                  v-model="form.password"
                  dense
                  variant="outlined"
                  label="Password"
                  placeholder="Enter Password"
                  :error-messages="v$.password.$errors.map((e) => e.$message)"
                  :type="isPasswordHidden ? 'password' : 'text'"
                  required
                  @input="v$.password.$touch"
                  @blur="v$.password.$touch"
                >
                  <template #append-inner>
                    <v-icon @click="isPasswordHidden = !isPasswordHidden">
                      {{ isPasswordHidden ? "mdi-eye-off" : "mdi-eye" }}
                    </v-icon>
                  </template>
                </v-text-field>
                <div class="text-center">
                  <v-btn
                    class="w-50"
                    color="primary"
                    type="submit"
                    @click.prevent="handleSubmit"
                    :loading="isLoading"
                  >
                    Login
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { email, helpers, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useStore } from "vuex";
const isLoading = ref(false);
const isPasswordHidden = ref(true);
const form = reactive({
  email: "fegde.mayur@gmail.com",
  password: "Tech@1234",
  sign_in_with: "EMAIL",
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, form);
const store = useStore();
const handleSubmit = function () {
  store.dispatch("auth/login", form);
};
</script>
