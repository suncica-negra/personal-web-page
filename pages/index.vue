<template>
  <div class="landing">
    <div class="intro max-dimensions">
      <p class="intro-title transition">Dry and clean code is my mode !</p>
    </div>
    <div class="landing-banner">
      <div>
        <p class="intro-more transition">
          {{ $t("general.landing.intro.part1") }}
          <span class="underline transition">{{
            $t("general.landing.intro.part2")
          }}</span>
          {{ $t("general.landing.intro.part3") }}
        </p>
        <LandingButton link="o-meni" />
        <div class="hero-socials-link">
          <span class="material-icons transition">share</span>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://suncica-negra.github.io/personal-web-page/"
            target="_blank"
          >
            <component :is="linkedin" />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://suncica-negra.github.io/personal-web-page/"
            target="_blank"
          >
            <component :is="facebook" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://suncica-negra.github.io/personal-web-page/"
            target="_blank"
          >
            <component :is="twitter" />
          </a>
          <a
            href="https://api.whatsapp.com/send?text=https://suncica-negra.github.io/personal-web-page/"
            target="_blank"
            data-action="share/whatsapp/share"
          >
            <component :is="whatsapp" />
          </a>
        </div>
      </div>
      <component :is="words" class="words" />
    </div>
    <LandingSection />
  </div>
</template>

<script>
import LandingButton from "../components/LandingButton.vue";
import LandingSection from "../components/LandingSection.vue";
import words from "../assets/images/words.svg?inline";
import linkedin from "../assets/images/linkedin.svg?inline";
import facebook from "../assets/images/facebook.svg?inline";
import twitter from "../assets/images/twitter.svg?inline";
import whatsapp from "../assets/images/whatsapp.svg?inline";

export default {
  components: {
    LandingButton,
    LandingSection,
    words,
    linkedin,
    facebook,
    twitter,
    whatsapp,
  },
  computed: {
    words() {
      return words;
    },
    linkedin() {
      return linkedin;
    },
    facebook() {
      return facebook;
    },
    twitter() {
      return twitter;
    },
    whatsapp() {
      return whatsapp;
    },
  },
};
</script>

<style lang="scss">
.landing {
  overflow: hidden;

  .landing-banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 30px 0 30px;
    max-width: 1920px;
    margin: 0 auto;
    min-height: calc(100vh - 246px);

    svg.words {
      width: 80%;
      height: 100%;
      justify-self: center;
    }

    .hero-socials-link {
      display: flex;
      max-width: 180px;
      justify-content: space-between;
      align-items: center;

      a:hover {
        animation: pulse 1s infinite;
        transition: 0.3s ease-in-out;
      }
    }
  }

  .intro {
    &.max-dimensions {
      padding-bottom: 0;
    }
    .intro-title {
      text-align: center;
    }
  }

  p {
    font-family: "Jura", sans-serif;
    font-size: 30px;

    &.intro-more {
      font-size: 23px;
      line-height: 1.6;

      .underline {
        border-bottom: 5px solid var(--blue);
        border-left: 5px solid var(--green);
        border-radius: 50%;
        padding: 6px 18px;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .landing {
    .landing-banner {
      grid-template-columns: 1fr;

      svg.words {
        width: 100%;
        order: -1;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .landing {
    .landing-banner {
      padding: 50px 0 0 0;
    }

    .intro {
      &.max-dimensions {
        padding: 0;
      }
    }
  }
}
</style>
