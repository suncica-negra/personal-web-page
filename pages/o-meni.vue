<template>
  <div>
    <h1 class="about-me-title">
      <span class="material-icons-outlined">perm_identity</span>
      {{ $t("general.about.title") }}
    </h1>
    <div class="hoby">
      <p>Hobiji:</p>
      <p>
        trčanje <span class="material-icons-outlined">directions_run</span>,
        <br />bicikliranje
        <span class="material-icons-outlined"> directions_bike </span>,
        <br />tenis
        <span class="material-icons-outlined"> sports_tennis </span>, <br />ples
        <span class="material-icons-outlined">
          <span class="material-icons-outlined"> emoji_people </span> </span
        >, <br />plivanje <span class="material-icons-outlined"> pool </span>,
        <br />čitanje knjiga (romani i stručna literatura)
        <span class="material-icons-outlined"> auto_stories </span>,
        <br />fotografiranje
        <span class="material-icons-outlined"> photo_camera </span>,
        <br />instalacija i podešavanje softvera
        <span class="material-icons-outlined"> app_settings_alt </span>
      </p>
    </div>
    <GoToTopButton :offsetTop="offsetTop" />
    <p class="time">{{ $t("general.about.today") }}</p>
    <div class="cards">
      <AboutMeCard v-for="(card, i) in aboutMe" :key="i" :card="card" />
    </div>
    <p class="time">{{ $t("general.about.past") }}</p>
  </div>
</template>

<script>
import AboutMeCard from "../components/AboutMeCard.vue";
import GoToTopButton from "../components/GoToTopButton.vue";
import { aboutMe } from "../data/about-me";

export default {
  components: {
    AboutMeCard,
    GoToTopButton,
  },
  computed: {
    aboutMe() {
      return aboutMe;
    },
  },
  data() {
    return {
      offsetTop: 0,
    };
  },
  beforeMount() {
    if (process.client) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
  methods: {
    onScroll(e) {
      if (process.client) {
        this.offsetTop = window.pageYOffset;
      }
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

  @media screen and (max-width: 500px) {
    display: unset;
  }
}

.hoby {
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  padding: 65px 0;
  background-image: url("../assets/images/cloud.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 632px;
  transition: all 0.5s ease-in-out;

  p {
    font-family: "Stick No Bills", sans-serif;
    font-size: 30px;

    &:first-child {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 700px) {
    display: grid;
    text-align: center;
  }
}
</style>
