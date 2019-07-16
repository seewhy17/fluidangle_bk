<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <div class="header">
            <h1 class="center-align">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container terms">
      <p/>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'
export default {
  name: 'TermsAndConditions',
  head() {
    return {
      title: 'Terms And Conditions',
      meta: [
        { hid: 'description', name: 'description', content: 'Terms And Conditions' }
      ]
    }
  },
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

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: {
          color: $primary;
          image: url('/img/bg-lines.png');
          size: cover;
          repeat: no-repeat;
          position: center center;
        }
        height: 90%;
        z-index: -1;
        /*@include breakpoint($max:768px){
          height: 100vh;
        }*/
      }

      .banner-grid {
        display: flex;
        justify-content: center;
        padding: {
          left: 5vw;
          right: 5vw;
          bottom: 4rem;
        }
        overflow-x: hidden;
        @include for-phone-only {
          grid-template-columns: 1fr;
        }
        .header {
          text-transform: capitalize;
          color: white;

          h1 {
            font-size: 3.5rem;
          }
        }
      }
    }
  }
</style>
