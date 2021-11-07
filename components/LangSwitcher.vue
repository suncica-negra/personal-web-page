<template>
  <div class="lang-switcher-wrapper">
    <span @click="() => handleClick('hr')">
      <nuxt-link
        :class="[language === 'hr' && 'active', 'locale-link']"
        :to="switchLocalePath('hr')"
        class="transition"
      >
        <img class="cro transition" src="@/assets/images/cro-lang.png" />
      </nuxt-link>
    </span>
    <span @click="() => handleClick('en')">
      <nuxt-link
        :class="[language === 'en' && 'active', 'locale-link']"
        :to="switchLocalePath('en')"
        class="transition"
      >
        <component :is="englang" />
      </nuxt-link>
    </span>
  </div>
</template>

<script>
import englang from "../assets/images/englang.svg?inline";

export default {
  name: "LangSwitcher",
  components: {
    englang,
  },
  data() {
    return {
      language:
        this.$route.path.split("/")[1].length > 2
          ? "hr"
          : this.$route.path.split("/")[1],
    };
  },
  computed: {
    englang() {
      return englang;
    },
  },
  methods: {
    handleClick(lang) {
      this.language = lang;
    },
  },
};
</script>

<style lang="scss">
.lang-switcher-wrapper {
  display: flex;

  span {
    margin-right: 10px;
    height: 40px;
  }

  svg,
  .cro {
    border-radius: 50%;
  }

  .cro {
    border: 1px solid white;
    display: block;
    width: 38px;
    height: 38px;
  }
}

.locale-link {
  opacity: 0.4;
  width: 40px;
  height: 40px;
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
