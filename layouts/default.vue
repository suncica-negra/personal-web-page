<template>
  <div>
    <Header />
    <Nuxt />
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
