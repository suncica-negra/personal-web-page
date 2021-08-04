<template>
  <div class="header-wrapper">
    This is header
    <ColorModePicker />
  </div>
</template>

<script>
import ColorModePicker from "@/components/ColorModePicker"

export default {
  components: {
    ColorModePicker
  }
}
</script>

<style lang="scss">
.header-wrapper {
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
}
</style>
