<template>
  <div>
    <h1>{{ $t("general.contact.title") }}</h1>
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
