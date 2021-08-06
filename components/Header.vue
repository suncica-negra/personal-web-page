<template>
  <div class="header-wrapper">
    <span>
      <ColorModePicker />
      <LangSwitcher />
    </span>
  </div>
</template>

<script>
import ColorModePicker from "@/components/ColorModePicker";
import LangSwitcher from "./LangSwitcher.vue";

export default {
  components: {
    ColorModePicker,
    LangSwitcher,
  },
};
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  background-color: #091a28;
  box-shadow: 0 0 15px var(--box-shadow);

  span {
    display: flex;
    align-items: center;
  }
}

</style>
