<template>
  <div class="container">
    <div class="center">
      <button class="btn-hover">
        <nuxt-link :to="localePath(link)">
          <component :is="moreButton" />
          <span>{{ $t("general.projects.casestudyButton") }}</span>
        </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import moreButton from "../assets/images/button.svg?inline";
export default {
  name: "LandingButton",
  props: {
    link: {
      type: String,
      default: "",
      required: true,
    },
  },
  components: {
    moreButton,
  },
  computed: {
    moreButton() {
      return moreButton;
    },
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  height: 160px;

  .center {
    width: 180px;
    height: 60px;
    position: absolute;
    bottom: 53px;

    .btn-hover {
      width: 180px;
      height: 60px;
      cursor: pointer;
      background: transparent;
      border: 1px solid #91c9ff;
      outline: none;
      transition: all 0.5s ease-in-out;
      border-radius: 5px;

      svg {
        position: absolute;
        left: 0;
        top: 0;
        fill: none;
        stroke: var(--glow-button);
        stroke-dasharray: 150 480;
        stroke-dashoffset: 150;
        transition: all 0.5s ease-in-out;
      }

      &:hover svg {
        stroke-dashoffset: -480;
      }

      & span {
        color: var(--color);
        font-family: "Bungee Hairline", cursive;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 8px;
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
