<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="title">
              <img src="/svg/heroshe-colored_2.svg" alt="">
            </h1>
            <p class="">
              Enterprise Base Software
            </p>
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
  name: 'Heroshe',
  components: {
    NavBar,
    Footer,
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  }
}
</script>

<style scoped lang="scss">
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
        height: 100%;
        z-index: -1;
      }

      .banner-grid {
        padding: 0 5vw 0;
        overflow-x: hidden;
      }

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;
        margin: {
          left: 0
        };

        h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: .95rem;
          font-weight: 500;
          line-height: 1.43;
        }
      }
    }
  }

</style>
