<template>
  <transition
    enter-active-class="scale-in-bl"
    leave-active-class="scale-out-bl"
  >
    <div id="back-to-top" v-if="offsetTop > 700" v-scroll-to="'#body'">
      <span class="material-icons-outlined">keyboard_double_arrow_up</span>
      <p>{{ $t("general.projects.toTop") }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GoToTopButton",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style lang="scss">
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
  text-align: center;

  p {
    font-family: "Bungee Hairline", cursive;
    font-weight: 600;
    font-size: 16px;
  }
}

@media screen and (max-width: 1023px) {
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
