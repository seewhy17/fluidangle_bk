<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <div class="header">
            <h1>
              GET IN TOUCH
            </h1>
            <p>
              Want to discuss your product or partnership?
            </p>
            <p>
              We’re always ready to help
            </p>
          </div>
        </div>
        <img src="/img/Asset 1.png" alt="Who We Are">
      </div>
    </div>
    <statistics />
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'
export default {
  name: 'ContactVue',
  components: {
    NavBar,
    Footer,
    'Statistics': () => ({ component: import('~/components/statistics.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  }
}
</script>

<style scoped lang="scss">
  .page {

    .banner {
      padding-top: 2rem;
      position: relative;
      min-height: 100vh;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: $primary;
        height: 60%;
        z-index: -1;
      }

      .banner-grid {
        padding: {
          left: 10vw;
          right: 2rem;
        };
        background: $primary;
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        @include for-phone-only {
          grid-template-columns: 1fr;
        }
      }

      .header {
        text-transform: capitalize;
        color: white;
        padding-top: 10%;

        h1 {
          font-size: 3.1rem;
        }
        p {
          font-size: 1.7rem;
        }

      }

      .about-text {
        p {
          font-size: .75rem;
          margin: {
            bottom: .5rem;
          }
        }
      }
    }
  }
</style>
