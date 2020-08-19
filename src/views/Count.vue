<template>
  <div>
    <Counter name="カウンター１" :initCount="5" @emitUp="getEvent" />
    <Counter name="カウンター２" :initCount="10" @emitUp="getEvent" />

    <p>{{ primitiveStore.$data.globalCount }}</p>
    <input type="text" v-model="primitiveStore.$data.globalCount" />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";
import primitiveStore from "@/primitiveStore.js";

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
  methods: {
    getEvent(payload) {
      console.log(payload);
      this.primitiveStore.$data.globalCount++;
    },
  },
};
</script>
