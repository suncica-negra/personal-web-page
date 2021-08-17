<template>
  <div>
    <Header />
    <Nuxt id="body" />
    <Footer />
    <client-only>
      <NoCookie />
    </client-only>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NoCookie from '@/components/NoCookie'

export default {
  components: {
    Header,
    Footer,
    NoCookie
  }
}
</script>

<style lang="scss">
#body {
  min-height: calc(100vh - 110px - 54px - 19px);
}
</style>