<template>
  <div class="about">
    <h1>アバウト画面</h1>

    <!-- このprofileはstoreのstateの変数 -->
    <p>{{ profile }}</p>
  </div>
</template>

<script>
/* storeのstateのprofileを使用したい為にimport */
import { mapState } from "vuex";

export default {
  mounted() {
    /* mountedのタイミングでactionsのfetchGithubProfileを実行 */
    this.$store.dispatch("fetchGithubProfile", {
      user_id: "octcat",
    });
  },
  computed: {
    /* storeのstateのprofileを使用できるようにする */
    ...mapState(["profile"]),
  },
};
</script>
