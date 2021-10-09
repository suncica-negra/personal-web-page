<template>
  <div>
    <Header />
    <Nuxt id="body" />
    <client-only>
      <NoCookie />
    </client-only>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NoCookie from "@/components/NoCookie";

export default {
  components: {
    Header,
    Footer,
    NoCookie,
  },
};
</script>

<style lang="scss">
#body {
  min-height: calc(100vh - 331px);
  max-width: 1920px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 221px);
  }

  @media screen and (max-width: 500px) {
    padding: 50px 15px;
  }
}
</style>
