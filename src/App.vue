<template>
  <div class="content_wrapper">
    <Header />
    <NewsSection />
  </div>
</template>

<script>
import Header from "~/components/Header";
import NewsSection from "~/components/NewsSection";

export default {
  components: {
    Header,
    NewsSection,
  },
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
};
</script>

<style lang="scss">
.content_wrapper {
  /* display: flex;
    flex-direction: column; */
  width: 1080px;
  margin: 0 auto;
}
</style>
