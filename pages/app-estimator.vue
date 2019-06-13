<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'

export default {
  name: 'AppEstimatorVue',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  .page {
    .banner {
      padding-top: 2rem;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: $primary;
        height: 85vh;
        z-index: -1;
      }
    }
  }
</style>
