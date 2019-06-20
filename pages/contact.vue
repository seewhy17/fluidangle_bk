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
    <section class="section contact-box container grid">
      <div class="contact-form-box">
        <p class="title">
          Drop us a message and
          get a response within 24 hours
        </p>
        <form action="" />
      </div>
      <div class="info-box">
        <div class="content-box">
          <p class="title">
            Our Headquarters
          </p>
          <p class="address">
            13 Rutland Square, Boston, MA 02118
          </p>
          <p class="email">contact@fluidangle.com</p>
          <p class="tel">Tel: <span>+1 (978) 849-4391</span></p>
          <div class="social-media">
            <small>SOCIAL MEDIA</small>
            <div class="social-media">
              <img
                src="/img/facebook-logo-button.png"
                srcset="/img/facebook-logo-button@2x.png 2x,
             /img/facebook-logo-button@3x.png 3x"
                alt="facebook"
              >
              <img
                src="/img/twitter.png"
                srcset="/img/twitter@2x.png 2x,
             /img/twitter@3x.png 3x"
                alt="twitter"
              >
              <img
                src="/img/youtube.png"
                srcset="/img/youtube@2x.png 2x,
             /img/youtube@3x.png 3x"
                alt="youtube"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
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
    .contact-box{
        grid-template-columns: 1.5fr 1fr;
      @include for-phone-only{
        grid-template-columns: auto;
      }
      padding:{top: 5%};
      &>div{
        box-shadow: 0 3px 60px 0 #e3e8f1;
        border-radius: 13px;
      }
      .title{
        font:{
          size:1.75rem;
          weight: 500;
        }
        color: #542ea4;
      }
      .contact-form-box{
        padding: 3% 5%;
        .title{
          width: 70%;
        }
      }
      .info-box{
        padding: 5% 10%;
        .content-box{
          width: 75%;
        }
        .title{
          margin:{
            bottom:5%;
          }
        }
        .address{
          margin-bottom: 10%;
        }
        .tel{
          margin-bottom: 7%;
        }
        .social-media{
          small{
            color:$light-gray;
          }
          img{
            margin-right: 5%;
          }
        }
      }
    }
  }
</style>
