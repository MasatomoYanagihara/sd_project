import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalCount: 0,
    profile: null,
  },
  mutations: {
    /* mutationsの第一引数には必ずstateが渡ってくる */
    globalIncrement(state) {
      state.globalCount++;
    },
    setGithubProfile(state, payload) {
      state.profile = payload;
    },
  },
  actions: {
    /* 非同期でgithubAPIの情報取得 */
    async fetchGithubProfile(store, payload) {

      /*
      stateの値がnullの場合だけ通信するようにする
      これがないと毎回、リクエストすることになる
      */
      if (store.state.profile !== null) return;

      const response = await fetch(
        `https://api.github.com/users/${payload.user_id}`
      ).then((res) => {
        return res.json();
      });

      /*
      返ってきた情報をstateに格納する為、mutationsのsetGithubProfileにcommitする
      */
      store.commit("setGithubProfile", response);
    },
  },
  modules: {},
});
