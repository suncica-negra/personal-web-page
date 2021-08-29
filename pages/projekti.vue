<template>
  <div :onscroll="onScroll">
    <h1>{{ $t("general.projects.title") }}</h1>
    <div class="projects-holder">
      <div class="projects-menu-wrapper">
        <div class="sticky">
          <div
            class="profesional"
            :class="{ active: active == 1 }"
            @click="toggleActive(1)"
          >
            <p class="golden-text-color">{{ $t("general.projects.tabOne") }}</p>
          </div>
          <div
            class="private"
            :class="{ active: active == 2 }"
            @click="toggleActive(2)"
          >
            <p class="golden-text-color">{{ $t("general.projects.tabTwo") }}</p>
          </div>
        </div>
        <transition
          enter-active-class="scale-in-bl"
          leave-active-class="scale-out-bl"
        >
          <div id="back-to-top" v-if="offsetTop > 700" v-scroll-to="'#body'">
            <span class="material-icons-outlined"
              >keyboard_double_arrow_up</span
            >
            <p>{{ $t("general.projects.toTop") }}</p>
          </div>
        </transition>
      </div>
      <div class="tabs">
        <div v-if="active == 1" class="tab">
          <p class="subtitle">Prvi tab</p>
        </div>
        <div v-if="active == 2" class="tab">
          <p class="subtitle">{{ $t("general.projects.tabTwoTitle") }}</p>
          <Project
            v-for="(project, i) in myProjects"
            :key="i"
            :project="project"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import { myProjects } from "../data/my-projects";

export default {
  components: {
    Project,
  },
  data() {
    return {
      active: 1,
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
  computed: {
    myProjects() {
      return myProjects;
    },
  },
  methods: {
    toggleActive(tab) {
      this.active = tab;
    },
    onScroll(e) {
      if (process.client) {
        this.offsetTop = window.pageYOffset;
      }
    },
  },
};
</script>

<style lang="scss">
.projects-holder {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 160px 1fr;
  min-height: 227px;

  .projects-menu-wrapper {
    text-align: center;
    min-height: calc(100vh - 380px);

    .sticky {
      position: sticky;
      overflow: auto;
      height: 205px;
      top: 15px;
    }

    .profesional,
    .private {
      height: 100px;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      box-shadow: inset -7px 0px 21px -8px var(--box-shadow-transparent),
        inset 16px 0px 12px -8px var(--box-shadow-transparent);
      transition: all 0.5s ease-in-out;
      position: relative;
      opacity: 0.5;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }

      &.active {
        box-shadow: inset 11px 0px 12px -2px var(--box-shadow-transparent),
          inset 0px 0px 0px 0px var(--box-shadow-transparent);
        opacity: 1;
      }

      & p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-family: "Chakra Petch", sans-serif;
        font-size: 20px;
        font-weight: 700;
      }
    }

    #back-to-top {
      position: fixed;
      bottom: 25px;
      left: 30px;
      box-shadow: inset -7px 0 39px -7px var(--box-shadow-transparent);
      border-radius: 50%;
      padding: 9px 15px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
      z-index: 1;

      .material-icons-outlined {
        font-family: "Material Icons";
        font-size: 30px;
      }

      p {
        font-family: "Bungee Hairline", cursive;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }

  .tabs {
    .tab {
      min-height: 100%;
      box-shadow: inset -7px 0 39px -7px var(--box-shadow-transparent);
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      border-top-right-radius: 20px;

      .subtitle {
        padding: 20px;
        font-family: "Goldman", cursive;
        font-size: 20px;
        line-height: 1.5;
        transition: all 0.5s ease-in-out;
      }
    }
  }
}

@media screen and (max-width: 1023px) {
  .projects-holder {
    grid-template-columns: 1fr;
    min-height: unset;

    .projects-menu-wrapper {
      min-height: unset;

      .sticky {
        display: flex;
        flex-direction: row;
        min-height: unset;
        height: 75px;
      }

      .profesional,
      .private {
        height: 100%;
        width: 50%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: unset;
        box-shadow: inset 8px 3px 16px -4px var(--box-shadow-transparent),
          inset 0px 0px 11px 1px var(--box-shadow-transparent);

        &.active {
          -moz-box-shadow: inset 0 10px 15px 1px var(--box-shadow-transparent);
          -webkit-box-shadow: inset 0 10px 15px 1px
            var(--box-shadow-transparent);
          box-shadow: inset 0 10px 15px 1px var(--box-shadow-transparent);
        }
      }

      #back-to-top {
        position: fixed;
        bottom: 25px;
        left: 25px;
        box-shadow: inset -7px 0 39px -7px var(--box-shadow-transparent);
        background-color: var(--bg-transparent);
        padding: 19px 21px;

        p {
          display: none;
        }
      }
    }

    .tabs {
      .tab {
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0;
        box-shadow: inset -4px -20px 39px -12px var(--box-shadow-transparent);
      }
    }
  }
}

.scale-in-bl {
  -webkit-animation: scale-in-bl 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: scale-in-bl 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes scale-in-bl {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
}

@keyframes scale-in-bl {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 0;
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
}
</style>
