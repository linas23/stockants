const accessTokenKey = "stock_ant_access_token";
// import { authLogout, getAuthUserData } from "../../api/auth";
import { authLogin } from "../../api/auth";
const loadState = () => {
  return {
    accessToken: localStorage.getItem(accessTokenKey) || null,
    currentUser: {},
  };
};
export default {
  namespaced: true,
  state: loadState(),
  getters: {
    isAuthenticated(state) {
      return state.accessToken !== null;
    },
    accessToken(state) {
      return state.accessToken;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    SET_AUTH_DATA(state, data) {
      state.currentUser = data.user;
      state.accessToken = data.access_token;
      localStorage.setItem(accessTokenKey, data.access_token);
    },
    LOGOUT(state) {
      localStorage.removeItem(accessTokenKey);
      const newState = loadState();
      Object.keys(newState).forEach((key) => {
        state[key] = newState[key];
      });
    },
    SET_USER_DATA(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async login({ commit }, payload) {
      console.log({ payload });
      const res = await authLogin(payload);
      console.log("res: ", res);
    },
  },
};
