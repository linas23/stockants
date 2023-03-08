import { createStore } from "vuex";
import authModule from "./modules/auth";
const store = createStore({
  namespaced: true,
  modules: {
    auth: authModule,
  },
});

export default store;
