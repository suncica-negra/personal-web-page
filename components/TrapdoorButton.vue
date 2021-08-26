<template>
  <div class="contact-buttons-holder">
    <div v-for="(contact, i) of contacts" :key="i">
      <div class="trapdoor" :class="contact.svg">
        <div class="top door"></div>
        <div class="bottom door"></div>
        <a
          :href="`${contact.href}`"
          target="_blank"
          :class="`${contact.svg}-button`"
          >{{ $t(`general.contact.${contact.svg}`) }}
          <component :is="`${contact.svg}`" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import gmail from "@/assets/images/gmail.svg?inline";
import linkedin from "@/assets/images/linkedin.svg?inline";
import github from "@/assets/images/github.svg?inline";

export default {
  name: "TrapdoorButton",
  components: {
    gmail,
    linkedin,
    github,
  },
  data() {
    return {
      contacts: [
        {
          svg: "gmail",
          href: "mailto:orhidea.martinic@gmail.com",
        },
        {
          svg: "github",
          href: "https://github.com/suncica-negra",
        },
        {
          svg: "linkedin",
          href: "https://www.linkedin.com/in/dea-k-331534187/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.contact-buttons-holder {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-top: 75px;

  .trapdoor {
    -webkit-transform: translateZ(0px);
    transform: translateZ(0px);
    -webkit-font-smoothing: antialiased;
    width: 200px;
    height: 50px;
    box-shadow: inset -7px 0px 12px -8px var(--box-shadow-transparent),
      inset 7px 0px 12px -8px var(--box-shadow-transparent);
    background: var(--box-shadow-transparent);
    -webkit-transition: background 400ms ease-in-out;
    -moz-transition: background 400ms ease-in-out;
    -ms-transition: background 400ms ease-in-out;
    -o-transition: background 400ms ease-in-out;
    transition: background 400ms ease-in-out;

    &.gmail {
      .door:before {
        content: "\e0e6";
      }
    }

    &.github {
      .door:before {
        content: "\e1b0";
      }
    }

    &.linkedin {
      .door:before {
        content: "\e157";
      }
    }

    &:hover {
      background: transparent;

      .door {
        box-shadow: 0px 0px 10px -2px var(--box-shadow-transparent);
        -webkit-transform: scale(1.08);
        -moz-transform: scale(1.08);
        -ms-transform: scale(1.08);
        -o-transform: scale(1.08);
        transform: scale(1.08);
      }

      .top {
        top: -50%;
      }

      .bottom {
        top: 100%;
      }
    }

    .github-button {
      left: 24px;
    }

    .gmail-button {
      left: 31px;
    }

    .linkedin-button {
      left: 38px;
    }

    .github-button,
    .gmail-button,
    .linkedin-button {
      display: flex;
      align-items: center;
      font-family: "Chakra Petch", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--color);
      text-decoration: none;
      justify-content: center;

      svg {
        margin-left: 10px;
        height: 50px;
      }
    }
  }

  .top {
    top: 0%;
    left: 0px;

    &:before {
      top: 5px;
    }
  }

  .bottom {
    top: 50%;
    left: 0px;

    &:before {
      top: -20px;
    }
  }

  .door {
    -webkit-transition: top 400ms, box-shadow 200ms, -webkit-transform 300ms;
    -moz-transition: top 400ms, box-shadow 200ms, -moz-transform 300ms;
    -ms-transition: top 400ms, box-shadow 200ms, -ms-transform 300ms;
    -o-transition: top 400ms, box-shadow 200ms, -o-transform 300ms;
    transition: top 400ms, box-shadow 200ms, transform 300ms,
      background-color 0.5s;
    -webkit-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-timing-function: ease-in-out;
    background-color: var(--bg);
    position: absolute;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    height: 52%;

    &:before {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      font-size: 46px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: "liga";
      font-feature-settings: "liga";
      -webkit-font-smoothing: antialiased;
      position: absolute;
      margin-left: -20px;
      font-size: 40px;
      color: var(--color);
      width: 0px;
      height: 20px;
      left: 52%;
      transition: all 0.5s ease-in-out;
    }
  }

  @media screen and (max-width: 741px) {
    display: grid;

    .trapdoor {
      &.linkedin,
      &.github {
        margin-top: 80px;
      }
    }
  }
}
</style>
