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
import coffeescript from "@/assets/images/coffeescript.svg?inline";
import graphql from "@/assets/images/graphql.svg?inline";
import scss from "@/assets/images/scss.svg?inline";
import sequelize from "@/assets/images/sequelize.svg?inline";


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
    coffeescript,
    graphql,
    scss,
    sequelize
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
    }

    #original-wordmark-express {
      path {
        fill: var(--color);
      }
    }
  }
}
</style>
