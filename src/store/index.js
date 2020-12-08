import { createStore } from "vuex";

export default createStore({
  state: {
    activePath: "1"
  },
  getters: {
    getActivePath(state, getters) {
      return state.activePath;
    }
  },
  mutations: {
    changeActivePath(state, params) {
      state.activePath = params;
    }
  },
  actions: {
    changeActivePathAsync({ commit }, args) {
      setTimeout(() => {
        commit("changeActivePath", args.path);
      }, 1000);
    }
  },
  modules: {}
});
