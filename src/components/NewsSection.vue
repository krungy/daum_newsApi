<template>
  <h1>Hello!</h1>
</template>

<script>
import newsApi from "~/api/api";
import axios from "axios";

export default {
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      // const { data } = await newsApi();
      // console.log(data.articles);
    },
  },
};
</script>

<style scoped lang="scss">
$color: red;

h1 {
  color: $color;
}
</style>
