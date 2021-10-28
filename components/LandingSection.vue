<template>
  <div class="landing-sections">
    <Scrollama
      @step-enter="stepEnterHandler"
      @step-exit="stepExitHandler"
      :offset="0.3"
    >
      <div v-for="(section, index) in sections" :key="index">
        <div class="section transition" :class="section.class">
          <div class="max-dimensions">
            <div v-if="section.project">
              <transition
                enter-active-class="bounce-left"
                leave-active-class="slide-out-right"
              >
                <div class="section-intro" v-if="bounceProject">
                  <h2 class="intro-more">
                    {{ $t("general.landing.projects." + section.title) }}
                  </h2>
                </div>
              </transition>
              <transition
                enter-active-class="bounce-left"
                leave-active-class="slide-out-right"
              >
                <div class="section-intro" v-if="!bounceProject">
                  <p class="intro-more">
                    {{ $t("general.landing.projects." + section.title) }}
                  </p>
                  <p class="intro-more">
                    {{ $t("general.landing.projects." + section.description1) }}
                  </p>
                  <p class="intro-more">
                    {{ $t("general.landing.projects." + section.description2) }}
                  </p>
                  <LandingButton :link="section.link" />
                </div>
              </transition>
            </div>
            <div v-if="section.contact">
              <transition
                enter-active-class="bounce-left"
                leave-active-class="slide-out-right"
              >
                <div class="section-intro" v-if="bounceContact">
                  <h2 class="intro-more">
                    {{ $t("general.landing.contacts." + section.title) }}
                  </h2>
                </div>
              </transition>
              <transition
                enter-active-class="bounce-left"
                leave-active-class="slide-out-right"
              >
                <div class="section-intro" v-if="!bounceContact">
                  <p class="intro-more">
                    {{ $t("general.landing.contacts." + section.title) }}
                  </p>
                  <p class="intro-more">
                    {{ $t("general.landing.contacts." + section.description1) }}
                  </p>
                  <p class="intro-more">
                    {{ $t("general.landing.contacts." + section.description2) }}
                  </p>
                  <LandingButton :link="section.link" />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </Scrollama>
  </div>
</template>

<script>
import LandingButton from "../components/LandingButton.vue";
import "intersection-observer"; // for cross-browser support
export default {
  name: "LandingSection",
  components: {
    LandingButton,
    Scrollama: () =>
      import("vue-scrollama").then((component) => {
        return component;
      }),
  },
  data() {
    return {
      bounceProject: true,
      bounceContact: true,
      showScrollama: false,
      sections: {
        projects: {
          project: true,
          title: "title",
          link: "projekti",
          description1: "description1",
          description2: "description2",
        },
        contacts: {
          contact: true,
          class: "contacts",
          title: "title",
          link: "kontakt",
          description1: "description1",
          description2: "description2",
        },
      },
    };
  },
  mounted() {
    this.showScrollama = true;
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      index === 0 && direction === "down"
        ? (this.bounceProject = !this.bounceProject)
        : null;
      index === 1 && direction === "down"
        ? (this.bounceContact = !this.bounceContact)
        : null;
    },
    stepExitHandler({ element, index, direction }) {
      index === 0 && direction === "up"
        ? (this.bounceProject = !this.bounceProject)
        : null;
      index === 1 && direction === "up"
        ? (this.bounceContact = !this.bounceContact)
        : null;
    },
  },
};
</script>

<style lang="scss">
.section {
  height: 364px;
  min-height: 100vh;
  background-color: var(--box-shadow-rewerse);
  position: relative;

  &.contacts {
    background-color: transparent;
  }

  .section-intro {
    position: absolute;

    h2 {
      font-size: 50px;
      font-family: "Goldman", cursive;
      margin-left: -4px;
    }
  }
}

@media screen and (max-width: 500px) {
  .section {
    width: 100vw;
    margin-left: -15px;

    .section-intro {
      left: 15px;
    }
  }
}

.bounce-left {
  -webkit-animation: bounce-in-right 1.1s both;
  animation: bounce-in-right 1.1s both;
}

.slide-out-right {
  -webkit-animation: slide-out-right 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-right 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}

@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
}

@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
