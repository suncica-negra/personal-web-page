<template>
  <div class="contact max-dimensions">
    <h1 class="transition">{{ $t("general.contact.title") }}</h1>
    <TrapdoorButton />
  </div>
</template>

<script>
import TrapdoorButton from "../components/TrapdoorButton.vue";
export default {
  components: {
    TrapdoorButton,
  },
};
</script>

<style lang="scss">
.contact {
  padding: 50px 30px;
}
</style>
