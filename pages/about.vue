<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="grid equal-two-rows content">
          <div class="header">
            <h1>
              WHO WE ARE
            </h1>
            <p>
              We are always initiative and responsive
            </p>
          </div>
          <div class="about-text">
            <p>
              We are doers. Our team of developers, designers, and devops engineers aims to see your ideas fly.
              Our products can get a new venture up and running or boost your existing business with great uptime.
            </p>
            <p>
              Your brand matters to us! Trust FluidAngle to show your customers
              your company’s best angle as we develop your custom product in line with your marketing.
            </p>
            <p>
              Your success is our success. We’re committed to bringing you a product that will satisfy you and your customers.
            </p>
          </div>
        </div>
        <div class="image-part">
          <img src="/img/xc.png" alt="">
        </div>
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
  name: 'About',
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
          left:10vw;
          top:2rem;
        };
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 1.8fr 2fr;
        @include for-phone-only{
          grid-template-columns: 1fr;
        }
        .content{
          grid-template-rows: 1.5fr 1fr;
          grid-gap: 1rem;
        }
        .image-part{}
      }
      .header {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.7rem;
          line-height: 2;
        }

      }
      .about-text{
        p{
          font-size:.75rem;
          margin:{
            bottom:.5rem;
          }
        }
      }
    }
  }
</style>
