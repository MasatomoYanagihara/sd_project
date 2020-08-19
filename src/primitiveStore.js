import Vue from "vue";

/* <template>がない、data()だけ持ったVueインスタンス */
const primitiveStore = new Vue({
  data() {
    return {
      globalCount: 0,
    };
  },
});

export default primitiveStore;
