<template>
  <div class="header-wrapper">
    <span>
      <nuxt-link class="btn btn-4 logo" to="/">
        <span><img class="me" src="@/assets/images/me.jpg" /></span>
      </nuxt-link>
      <nuxt-link class="btn btn-4 text" to="/"> {{ $t("general.header.about") }} </nuxt-link>
      <nuxt-link class="btn btn-4 text" to="/"> {{ $t("general.header.projects") }} </nuxt-link>
      <nuxt-link class="btn btn-4 text" to="/"> {{ $t("general.header.contact") }} </nuxt-link>
    </span>
    <span>
      <ColorModePicker />
      <LangSwitcher />
    </span>
  </div>
</template>

<script>
import ColorModePicker from "@/components/ColorModePicker";
import LangSwitcher from "./LangSwitcher.vue";

export default {
  components: {
    ColorModePicker,
    LangSwitcher,
  },
};
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  background-color: #091a28;
  box-shadow: 0 0 15px var(--box-shadow);

  span {
    display: flex;
    align-items: center;
  }

  .me {
    width: 70px;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .btn {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    transition: all 0.4s ease;

    &.logo {
      margin-right: 20px;
    }

    &.text {
      border-radius: unset;
      width: unset;
      height: unset;
      color: #fdf9f3;
      text-decoration: none;
      padding: 20px;
      margin-right: 20px;
      letter-spacing: 1.7px;
    }

    &:hover {
      text-decoration: none;
      box-shadow: 0 0 15px #d3d6db;
      transform: scale(1.1);

      &.text {
        box-shadow: unset;
        transform: unset;
        color: #09aeba;
      }
    }

    &.btn-4 {
      overflow: hidden;
      position: relative;

      &:after {
        background: #fff;
        content: "";
        height: 155px;
        left: -75px;
        opacity: 0.2;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
      }

      &:hover {
        &:after {
          left: 130%;
          transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    }
  }
}
</style>
