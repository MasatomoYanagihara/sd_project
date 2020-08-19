<template>
  <div>
    <Counter name="カウンター１" :initCount="5" @emitUp="getEvent" />
    <Counter name="カウンター２" :initCount="10" @emitUp="getEvent" />

    <p>computed経由でstateのglobalCountを表示：{{ count }}</p>
    <p>primitiveStore：{{ primitiveStore.$data.globalCount }}</p>
    <input type="text" v-model="primitiveStore.$data.globalCount" />
    <p>globalCount：{{ globalCount }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import primitiveStore from "@/primitiveStore.js";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    /* importしてcomponentsに記述するとコンポーネントをローカル登録できる */
    Counter,
  },
  data() {
    return {
      primitiveStore,
    };
  },
  computed: {
    count() {
      /* this.$store.stateでstoreのstateにアクセスできる */
      return this.$store.state.globalCount;
    },
    ...mapState(["globalCount"]),
  },
  methods: {
    getEvent(payload) {
      console.log(payload);
      /* this.$store.commit()でstoreのmutationsにアクセスできる */
      this.$store.commit("globalIncrement");
    },
  },
};
</script>
