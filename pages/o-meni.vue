<template>
  <div>
    <h1 class="about-me-title">
      <span class="material-icons-outlined">perm_identity</span>
      {{ $t("general.about.title") }}
    </h1>
    <p class="time">{{ $t("general.about.today") }}</p>
    <div class="cards">
      <AboutMeCard v-for="(card, i) in aboutMe" :key="i" :card="card" />
    </div>
    <p class="time">{{ $t("general.about.past") }}</p>
  </div>
</template>

<script>
import AboutMeCard from "../components/AboutMeCard.vue";
import { aboutMe } from "../data/about-me";

export default {
  components: {
    AboutMeCard,
  },
  computed: {
    aboutMe() {
      return aboutMe;
    },
  },
};
</script>

<style lang="scss">
.about-me-title {
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  span {
    font-size: 50px;
    margin-right: 10px;
  }
}

.time {
  text-align-last: center;
  font-family: "Bungee Hairline", cursive;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.5s ease-in-out;
}

.cards {
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    background-color: var(--green);
    content: "";
    height: 100%;
    left: calc(50% - 2px);
    position: absolute;
    width: 4px;
    z-index: -1;
    transition: all 0.5s ease-in-out;
  }
}
</style>
