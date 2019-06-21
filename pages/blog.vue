<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <div class="header">
            <h1>
              BLOG
            </h1>
            <p>
              Want to discuss your product or partnership?
            </p>
            <p>
              We’re always ready to help
            </p>
          </div>
          <div class="subscribe">
            <form action="">
              <div class="input-block">
                <input type="text" placeholder="Sign up for our weekly newsletter">
                <button class="subscribe">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <img src="/svg/xc.svg" alt="Who We Are">
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'
export default {
  name: 'Blog',
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
        background: $primary;
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

      .header {
        text-transform: capitalize;
        color: white;

        h1 {
          font-size: 5.625rem;
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
      .input-block{
        display: inline-flex;
        padding: {
          left:8%;
          top:.5rem;
          bottom:.5rem;
          right: 1.0625rem;
        };
        margin: {
          top: 1.5rem;
        };
        border-radius: 48px;
        border: solid 1px #707070;
        background-color: $light;
        font-size: .95rem;
        input{
          color: #9fb0bf;
          font-size: 1.28rem;
          line-height: 1.22;
          padding: 1.25rem 0;
          border:0;
          &:focus{
            outline: 0;
          }
        }
        button{
          border-radius: 48px;
          border: solid 1px #707070;
          color:$light;
          background-color: $primary;
          font-size: 1.75rem;
          padding: {
            top:.75rem;
            bottom:.65rem;
            left:1.5rem;
            right:1.45rem;
          };
        }
      }
    }
  }
</style>
