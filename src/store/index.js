import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCount: 5
  },
  mutations: {
    /* 第一引数には必ずstateが渡ってくる */
    globalIncrement(state) {
      state.globalCount++
    }
  },
  actions: {},
  modules: {}
});
