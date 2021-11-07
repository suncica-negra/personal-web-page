<template>
  <transition
    enter-active-class="scale-in-bl"
    leave-active-class="scale-out-bl"
  >
    <div
      id="back-to-top"
      class="transition"
      v-if="offsetTop > 700"
      v-scroll-to="'#body'"
    >
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
  cursor: pointer;
  z-index: 1;
  text-align: center;
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    width: 73px;
    height: 73px;

    p {
      display: none;
    }
  }
}
</style>
