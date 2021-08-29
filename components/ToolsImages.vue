<template>
  <div class="images">
    <span v-for="(image, i) in images" :key="i">
      <component :is="`${image}`" class="svg-image" />
    </span>
  </div>
</template>

<script>
import css3 from "@/assets/images/css3.svg?inline";
import html5 from "@/assets/images/html5.svg?inline";
import javascript from "@/assets/images/javascript.svg?inline";
import rails from "@/assets/images/rails.svg?inline";
import react from "@/assets/images/react.svg?inline";
import vuejs from "@/assets/images/vuejs.svg?inline";
import nodejs from "@/assets/images/nodejs.svg?inline";
import express from "@/assets/images/express.svg?inline";
import nuxt from "@/assets/images/nuxt.svg?inline";
import angular from "@/assets/images/angular.svg?inline";
import mongodb from "@/assets/images/mongodb.svg?inline";

export default {
  name: "ToolsImages",
  props: {
    images: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    css3,
    html5,
    javascript,
    rails,
    react,
    vuejs,
    nodejs,
    express,
    nuxt,
    angular,
    mongodb,
  },
};
</script>

<style lang="scss">
.images {
  .svg-image {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    .letter {
      fill: var(--color);
      transition: all 0.5s ease-in-out;
    }

    #original-wordmark-express {
      path {
        fill: var(--color);
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
