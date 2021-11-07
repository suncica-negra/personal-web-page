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
import ogImage from "../static/images/my-webpage.png";

export default {
  components: {
    Header,
    Footer,
    NoCookie,
  },
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: ogImage,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#body {
  min-height: calc(100vh - 331px);

  @media screen and (max-width: 1023px) {
    min-height: calc(100vh - 221px);
  }

  @media screen and (max-width: 500px) {
    padding: 50px 15px;
  }
}
</style>
