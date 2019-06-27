<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid" />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'
export default {
  name: 'Post01',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style scoped lang="scss">
  .page {
    .banner {
      padding-top: 2rem;
      position: relative;
      height: 100vh;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: {
          image: url('~assets/images/Rectangle 1856.png');
          repeat: no-repeat;
          position: center;
          size: cover;
        }
        height: 60%;
        z-index: -1;
      }

      .banner-grid {
        padding: {
          left: 10vw;
          right: 2rem;
          top: 2rem;
        };
        background: $primary;
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        @include for-phone-only {
          grid-template-columns: 1fr;
        }
      }
    }
  }
</style>
