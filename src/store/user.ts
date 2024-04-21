// initial state
//state:存储的状态信息

import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notlogin",
    },
  }),
  mutations: {
    updateLoginUser(state, payload) {
      state.loginUser = payload;
    },
  },
  actions: {
    getLoginUser({ commit, state }, payload) {
      //从远程请求获取登录信息
      commit("updateLoginUser", { userName: "fyy" });
    },
  },
} as StoreOptions<any>;
