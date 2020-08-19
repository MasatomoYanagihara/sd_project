<template>
  <div>
    <p>globalCount：{{ globalCount }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    /* import後...mapState書いて、storeのstateのglobalCountを使用できる */
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
