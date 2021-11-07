<template>
  <div class="private-projects transition">
    <div :class="project.imageOrder" class="image-width">
      <nuxt-img
        format="webp"
        :src="`/images/${project.imageSrc}`"
        sizes="md:100vw lg:232px xl:309px xxl:510"
        :alt="project.name"
        quality="100"
      />
    </div>
    <div :class="project.textOrder" class="text-width">
      <p class="description">
        {{ $t("general.projects.description." + project.name) }}
      </p>
      <div class="dates">
        <span class="material-icons-outlined">miscellaneous_services</span>
        <p>{{ project.dates }}</p>
      </div>
      <div class="tools">
        <span class="material-icons-outlined">construction</span>
        <ToolsImages :images="project.images" />
      </div>
      <div class="buttons-wrapper">
        <a
          v-if="project.code !== undefined && project.code !== ''"
          :href="`${project.code}`"
          target="_blank"
          ><button class="glow-on-hover transition" type="button">
            <code>{{ $t("general.projects.codeButton") }}</code>
            <span class="material-icons-outlined">code</span>
          </button></a
        >
        <a
          v-if="project.casestudy !== undefined && project.casestudy !== ''"
          :href="`${project.casestudy}`"
          target="_blank"
          ><button class="glow-on-hover transition" type="button">
            <code>{{ $t("general.projects.casestudyButton") }}</code>
            <span class="material-icons-outlined">code</span>
          </button></a
        >
        <a :href="`${project.web}`" target="_blank"
          ><button class="glow-on-hover transition" type="button">
            <code>{{ $t("general.projects.webButton") }}</code>
            <span class="material-icons-outlined">web</span>
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ToolsImages from "./ToolsImages.vue";

export default {
  name: "Project",
  components: {
    ToolsImages,
  },
  props: {
    project: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
};
</script>

<style lang="scss">
.private-projects {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  padding: 20px;

  &:hover {
    box-shadow: 0 0 15px var(--box-shadow-transparent);
    border-radius: 10px;
  }

  .buttons-wrapper {
    display: flex;

    a:first-child {
      margin-right: 20px;
    }
  }

  .dates,
  .tools {
    display: flex;
    align-items: center;

    .material-icons-outlined {
      margin-right: 20px;
    }

    p {
      font-family: "Chakra Petch", sans-serif;
      letter-spacing: 3px;
    }
  }

  .dates {
    padding: 20px 0;
  }

  .tools {
    padding-bottom: 20px;
  }

  .glow-on-hover {
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--bg);
    color: #243746;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 15px;

    &:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      border-radius: 10px;
    }

    &:active {
      color: #000;
    }

    &:active:after {
      background: transparent;
    }

    &:hover:before {
      opacity: 1;
    }

    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
      left: 0;
      top: 0;
      border-radius: 10px;
    }

    .material-icons-outlined {
      margin: 0 0 0 20px;
    }

    code {
      font-size: 16px;
      letter-spacing: 3px;
      font-weight: 600;
    }
  }

  .text-width {
    width: 60%;

    .description {
      font-family: "Varela Round", sans-serif;
      font-size: 18px;
      line-height: 1.4;
    }
  }

  .image-width {
    width: 30%;
  }

  .first,
  .second {
    position: relative;
  }

  .second {
    order: 2;
  }

  .first {
    order: 1;
  }

  img {
    border-radius: 7px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 905px) {
  .private-projects {
    display: grid;

    .text-width {
      width: 100%;
    }

    .image-width {
      width: 100%;
    }

    .second {
      order: unset;
    }

    .first {
      order: unset;
    }

    img {
      width: 100%;
      position: relative;
      top: unset;
      left: unset;
      -ms-transform: unset;
      transform: unset;
      margin-bottom: 20px;
    }
  }
}
</style>
