<template>
  <div>
    <h1>Projekti</h1>
    <div class="projects-holder">
      <div class="projects-menu-wrapper">
        <div
          class="profesional"
          :class="{ active: active == 1 }"
          @click="toggleActive(1)"
        >
          <p>Profesionalni projekti</p>
        </div>
        <div
          class="private"
          :class="{ active: active == 2 }"
          @click="toggleActive(2)"
        >
          <p>Privatni projekti</p>
        </div>
      </div>
      <div class="tabs">
        <div v-if="active == 1" class="tab">Prvi tab</div>
        <div v-if="active == 2" class="tab">Drugi tab</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    toggleActive(tab) {
      this.active = tab;
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

    .profesional,
    .private {
      height: 50%;
      position: relative;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      box-shadow: inset -7px 0px 21px -8px var(--box-shadow-transparent),
        inset 16px 0px 12px -8px var(--box-shadow-transparent);
      transition: all 0.5s ease-in-out;

      &.active {
        box-shadow: inset 11px 0px 12px -2px var(--box-shadow-transparent),
          inset 0px 0px 0px 0px var(--box-shadow-transparent);
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
        background: linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
        background: -webkit-linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
      }
    }
  }

  .tabs {
    .tab {
      min-height: 100%;
      -webkit-box-shadow: 7px 0px 11px -1px var(--box-shadow-transparent);
      -moz-box-shadow: 7px 0px 11px -1px var(--box-shadow-transparent);
      box-shadow: 7px 0px 11px -1px var(--box-shadow-transparent);
    }
  }
}

@media screen and (max-width: 1023px) {
  .projects-holder {
    grid-template-columns: 1fr;
    min-height: unset;

    .projects-menu-wrapper {
      display: flex;
      flex-direction: row;
      min-height: unset;
      height: 75px;

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
        -webkit-box-shadow: 0px 6px 5px 1px var(--box-shadow-transparent);
        -moz-box-shadow: 0px 6px 5px 1px var(--box-shadow-transparent);
        box-shadow: 0px 6px 5px 1px var(--box-shadow-transparent);
      }
    }
  }
}
</style>
