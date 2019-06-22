<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="title">
              <img src="/img/LOGO text.png" alt="">
            </h1>
            <div class="image-part">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </section>
      <div class="blocks-container" />
    </div>
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Plinkd',
  components: {
    NavBar,
    Footer,
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  }
}
</script>

<style scoped>

</style>
