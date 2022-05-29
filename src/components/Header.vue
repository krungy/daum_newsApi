<template>
  <header>
    <a href="#" class="logo">
      <img :src="logo_foot" alt="다음 로고" />
    </a>
    <form class="form_header">
      <input class="input_search" type="text" />
      <button class="button_search" type="submit">검색</button>
    </form>
  </header>
</template>

<script>
import ico_sprite from "~/assets/images/ico_sprite.png";
import logo_foot from "~/assets/images/logo_foot.gif";

export default {
  data() {
    return {
      ico_sprite,
      logo_foot,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .form_header {
    width: 520px;
    padding: 0 80px 0 14px;
    .input_search {
      width: 100%;
      height: 42px;
      font-size: 18px;
      line-height: 24px;
      outline: none;
    }
    /* .button_search {
      background-image: url(ico_sprite);
    } */
  }
}
</style>
