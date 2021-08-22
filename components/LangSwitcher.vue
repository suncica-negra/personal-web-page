<template>
  <div class="lang-switcher-wrapper">
    <span @click="() => handleClick('hr')">
      <nuxt-link
        :class="[language === 'hr' && 'active', 'locale-link']"
        :to="switchLocalePath('hr')"
      >
        <img class="cro" src="@/assets/images/cro-lang.png" />
      </nuxt-link>
    </span>
    <span @click="() => handleClick('en')">
      <nuxt-link
        :class="[language === 'en' && 'active', 'locale-link']"
        :to="switchLocalePath('en')"
      >
        <EngLang />
      </nuxt-link>
    </span>
  </div>
</template>

<script>
import EngLang from "./svg-image-templates/EngLang.vue";

export default {
  name: "LangSwitcher",
  components: {
    EngLang,
  },
  data() {
    return {
      language:
        this.$route.path.split("/")[1].length > 2
          ? "hr"
          : this.$route.path.split("/")[1],
    };
  },
  methods: {
    handleClick(lang) {
      this.language = lang;
    },
  },
};
</script>

<style scoped lang="scss">
.lang-switcher-wrapper {
  display: flex;

  span {
    margin-right: 10px;
    height: 40px;
  }

  svg,
  .cro {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.4s ease;
  }

  .cro {
    border: 1px solid white;
    display: block;
  }
}

.locale-link {
  opacity: 0.4;
  transition: 0.3s ease-out all;
}

.nuxt-link-exact-active {
  opacity: 1;
}

.locale-link:hover {
  opacity: 1;

  svg,
  .cro {
    box-shadow: 0 0 15px #d3d6db;
    transform: scale(1.1);
  }
}
</style>
