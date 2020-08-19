<template>
  <div id="app">
    <Counter name="カウンター１" :initCount="5" />
    <Counter name="カウンター１" :initCount="5" @emitUp="getEvent" />
    <Counter name="カウンター２" :initCount="10" />
    <Counter name="カウンター２" :initCount="10" @emitUp="getEvent" />
    <p>
      EventStack: {{ stack }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";

export default {
  name: "Home",
  components: {
    /* importしてcomponentsに記述するとコンポーネントをローカル登録できる */
    Counter,
  },
  data() {
    return {
      stack: [],
    };
  },
  methods: {
    getEvent(payload) {
      this.stack.push(payload);
    },
  },
};
</script>
