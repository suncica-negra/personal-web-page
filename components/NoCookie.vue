<template>
  <div class="cookie-wrapper">
    <transition leave-active-class="scale-out-bl">
      <div class="cookie" v-if="isOpen">
        <span class="text golden-text-color"
          >{{ $t("general.cookie.partOne") }} <br />{{
            $t("general.cookie.partTwo")
          }}
          <br />{{ $t("general.cookie.partThree") }} <br />{{
            $t("general.cookie.partFour")
          }}
          <br />{{ $t("general.cookie.partFive") }} <br />{{
            $t("general.cookie.partSix")
          }}
          <br />{{ $t("general.cookie.partSeven") }} <br />{{
            $t("general.cookie.partEight")
          }}</span
        >
        <div class="background">
          <component :is="cookie" />
        </div>
        <div class="box-2">
          <div class="close btn-two transition" @click="broughtToMind">
            <span>CLOSE</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import cookie from "../assets/images/cookie.svg?inline";
export default {
  name: "NoCookie",
  components: {
    cookie,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    cookie() {
      return cookie;
    },
  },
  created() {
    if (this.getGDPR() === null) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("NoCookie:accepted");
      }
    },
    broughtToMind() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("NoCookie:accepted", true);
      }
    },
  },
};
</script>

<style lang="scss">
.cookie-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;

  .cookie {
    .text {
      position: fixed;
      bottom: 43px;
      left: 71px;
      font-family: "Chakra Petch", sans-serif;
      font-weight: 700;
      font-size: 16px;
      z-index: 1;
    }

    .background {
      position: fixed;
      bottom: 0;
      transform: translate(-29px, 88px);

      svg {
        width: 400px;
        height: 400px;
      }
    }

    .box-2 {
      position: fixed;
      bottom: 219px;
      left: 239px;

      .close {
        line-height: 50px;
        height: 50px;
        text-align: center;
        width: 150px;
        cursor: pointer;
      }

      .btn-two {
        color: var(--cookie);
        position: relative;
      }

      .btn-two span {
        z-index: 2;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        font-family: "Chakra Petch", sans-serif;
        font-weight: 700;
        font-size: 16px;
      }

      .btn-two::before,
      .btn-two::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.5s ease-in-out;
        border-radius: 10px;
      }

      .btn-two:hover::before {
        transform: rotate(-45deg);
        border: 1px solid var(--cookie-close-border);
        background-color: var(--cookie-close);
      }

      .btn-two:hover::after {
        transform: rotate(45deg);
        border: 1px solid var(--cookie-close-border);
        background-color: var(--cookie-close);
      }
    }
  }

  @media screen and (max-width: 500px) {
    .cookie {
      .text {
        bottom: 8.6vw;
        left: 14.2vw;
        font-size: 3.2vw;
      }

      .background {
        transform: translate(-5.8vw, 17.6vw);

        svg {
          width: 80vw;
          height: 80vw;
        }
      }

      .box-2 {
        bottom: 43.8vw;
        left: 47.8vw;

        .close {
          line-height: 10vw;
          height: 10vw;
          width: 30vw;
        }

        .btn-two span {
          font-size: 3.2vw;
        }

        .btn-two::before,
        .btn-two::after {
          border-radius: 2vw;
        }
      }
    }
  }
}
</style>
