<template>
  <div>
    <div class="desktop-only">
      <div class="header-holder">
        <div class="header-wrapper">
          <span>
            <nuxt-link class="btn btn-4 logo" :to="localePath('/')">
              <span><img class="me" src="@/assets/images/me.jpg" /></span>
            </nuxt-link>
            <nuxt-link
              class="btn btn-4 text"
              :to="localePath('/o-meni')"
            >
              {{ $t("general.header.about") }}
            </nuxt-link>
            <nuxt-link
              class="btn btn-4 text"
              :to="localePath('/projekti')"
            >
              {{ $t("general.header.projects") }}
            </nuxt-link>
            <nuxt-link
              class="btn btn-4 text"
              :to="localePath('/kontakt')"
            >
              {{ $t("general.header.contact") }}
            </nuxt-link>
          </span>
          <span>
            <ColorModePicker />
            <LangSwitcher />
          </span>
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <div class="custom">
        <input id="input-burger" type="checkbox" @click="handleDropdown" />
        <span></span>
        <span></span>
        <span></span>
        <div id="menu">
          <div class="background" :class="{ active: dropdown }" />
        </div>
      </div>
    </div>
    <div class="mobile-only">
      <transition
        enter-active-class="slide-top-reverse"
        leave-active-class="slide-top"
      >
        <div v-if="dropdown" class="dropdown-menu">
          <nuxt-link class="btn btn-4 logo" :to="localePath('/')">
            <span @click="closeDropdown"
              ><img class="me" src="@/assets/images/me.jpg"
            /></span>
          </nuxt-link>
          <span @click="closeDropdown"
            ><nuxt-link
              class="btn btn-4 text golden-text-color"
              :to="localePath('/o-meni')"
            >
              {{ $t("general.header.about") }}
            </nuxt-link></span
          >
          <span @click="closeDropdown"
            ><nuxt-link
              class="btn btn-4 text golden-text-color"
              :to="localePath('/projekti')"
            >
              {{ $t("general.header.projects") }}
            </nuxt-link></span
          >
          <span @click="closeDropdown"
            ><nuxt-link
              class="btn btn-4 text golden-text-color"
              :to="localePath('/kontakt')"
            >
              {{ $t("general.header.contact") }}
            </nuxt-link></span
          >
        </div>
      </transition>
      <transition enter-active-class="slide-left">
        <div v-if="dropdown" class="color-lang">
          <ColorModePicker />
          <LangSwitcher />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ColorModePicker from "@/components/ColorModePicker";
import LangSwitcher from "./LangSwitcher.vue";

export default {
  name: "Header",
  components: {
    ColorModePicker,
    LangSwitcher,
  },
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    handleDropdown() {
      this.dropdown = !this.dropdown;
    },
    closeDropdown() {
      document.getElementById("input-burger").click();
    },
  },
};
</script>

<style lang="scss">
.header-holder {
  width: 100%;
  background-color: #091a28;
  box-shadow: 0 0 15px var(--box-shadow);

  .header-wrapper {
    display: flex;
    padding: 20px 50px;
    justify-content: space-between;
    max-width: 1920px;
    margin: 0 auto;

    span {
      display: flex;
      align-items: center;
    }
  }
}

.me {
  width: 70px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.btn {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;

  &.logo {
    margin-right: 20px;
  }

  &.text {
    border-radius: unset;
    width: unset;
    height: unset;
    color: #fdf9f3;
    text-decoration: none;
    padding: 20px;
    margin-right: 20px;
    letter-spacing: 1.7px;
    font-size: 16px;

    &.nuxt-link-exact-active {
      background: linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
      background: -webkit-linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 15px #d3d6db;
    transform: scale(1.1);

    &.text {
      box-shadow: unset;
      transform: unset;
      background: linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
      background: -webkit-linear-gradient(to right, #7b6542 0%, #d5c19c 45%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &.btn-4 {
    overflow: hidden;
    position: relative;

    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
    }

    &:hover {
      &:after {
        left: 130%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
}

.custom {
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  padding: 26px 20px 20px 20px;
  background: var(--bg-reverse);
  border-radius: 50%;
  box-shadow: 0px 5px 10px var(--box-shadow);

  input {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 13px;
    left: 13px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: var(--bg);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-5px, -8px);
    background: var(--bg);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  #menu a {
    padding: 10px 0;
    font-size: 22px;
  }

  input:checked ~ div {
    transform: none;
  }

  .background {
    background-color: var(--bg-reverse);
    border-radius: 50%;
    display: block;
    height: 2.938rem;
    position: absolute;
    bottom: -8px;
    right: -41px;
    width: 47px;
    transition: all 0.5s ease-in-out;

    &.active {
      transform: scale(14);
    }
  }
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  position: fixed;
  bottom: 93px;
  right: 0;
  z-index: 1;

  a.btn.btn-4.text,
  a.btn.btn-4.logo {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
  }

  a:hover {
    box-shadow: 0 0 15px var(--box-shadow-rewerse);
  }

  span {
    overflow: hidden;
    display: inline-flex;
  }
}

.slide-top {
  -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(256px);
    transform: translateY(256px);
    opacity: 0;
  }
}

@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateY(256px);
    transform: translateY(256px);
    opacity: 0;
  }
}

.slide-top-reverse {
  -webkit-animation: slide-top-reverse 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-top-reverse 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-top-reverse {
  0% {
    -webkit-transform: translateY(256px);
    transform: translateY(256px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-top-reverse {
  0% {
    -webkit-transform: translateY(256px);
    transform: translateY(256px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

html.dark-mode .mobile-only .btn.btn-4.text:after {
  opacity: 0.1;
  background: #000;
}

.slide-left {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s
    both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(140px);
    transform: translateX(140px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-left {
  0% {
    -webkit-transform: translateX(140px);
    transform: translateX(140px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.color-lang {
  position: fixed;
  bottom: 72px;
  right: 127px;
  z-index: 1;

  .lang-switcher-wrapper,
  ul {
    display: unset;

    .cro {
      margin-bottom: 18px;
    }

    li:nth-child(2) {
      margin-bottom: 18px;
    }

    li:hover,
    a:hover .cro,
    .locale-link:hover svg {
      box-shadow: 0 0 15px var(--box-shadow-rewerse);
    }
  }

  .nuxt-link-exact-active.nuxt-link-active.active.locale-link img {
    opacity: 1;
  }

  .locale-link {
    img {
      opacity: 0.4;
    }

    &:hover img {
      opacity: 1;
    }
  }
}
</style>
