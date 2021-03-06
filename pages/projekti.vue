<template>
  <div :onscroll="onScroll" class="projects max-dimensions">
    <h1 class="project-title transition">
      {{ $t("general.projects.title") }}
      <span class="material-icons-outlined">code</span>
    </h1>
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
            class="private transition"
            :class="{ active: active == 2 }"
            @click="toggleActive(2)"
          >
            <p class="golden-text-color">{{ $t("general.projects.tabTwo") }}</p>
          </div>
        </div>
        <GoToTopButton :offsetTop="offsetTop" />
      </div>
      <div class="tabs">
        <div v-show="active == 1" class="tab">
          <p class="subtitle transition">{{ $t("general.projects.tabOneTitle") }}</p>
          <Project
            v-for="(project, i) in professionalProjects"
            :key="i"
            :project="project"
          />
        </div>
        <div v-show="active == 2" class="tab">
          <p class="subtitle transition">{{ $t("general.projects.tabTwoTitle") }}</p>
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
import GoToTopButton from "../components/GoToTopButton.vue";
import Project from "../components/Project.vue";
import { myProjects } from "../data/my-projects";
import { professionalProjects } from "../data/professional-projects";

export default {
  components: {
    Project,
    GoToTopButton,
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
    professionalProjects() {
      return professionalProjects;
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
.projects {
  padding: 50px 30px;
}

.project-title {
  display: flex;
  align-items: center;

  span {
    font-size: 50px;
    margin-left: 10px;
  }
}

.projects-holder {
  padding-top: 30px;
  display: grid;
  grid-template-columns: 150px 1fr;
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
      position: relative;
      opacity: 0.5;
      display: flex;
      align-items: center;
      justify-content: center;

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
        font-family: "Chakra Petch", sans-serif;
        font-size: 20px;
        font-weight: 700;
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
</style>
