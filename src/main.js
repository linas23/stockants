import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css";
import vuetify from "./plugins/vuetify";
import "bootstrap/dist/css/bootstrap.css";
import VueApexCharts from "vue3-apexcharts";
import App from "./App.vue";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(VueApexCharts);
app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
