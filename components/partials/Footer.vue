<template>
  <footer>
    <div class="footer-grid container grid">
      <div class="company-links">
        <p class="title">
          COMPANY
        </p>
        <div class="links flex dir-column">
          <nuxt-link to="/">
            About us
          </nuxt-link>
          <nuxt-link to="/">
            Blog
          </nuxt-link>
          <nuxt-link to="/">
            Career
          </nuxt-link>
        </div>
      </div>
      <div class="services-links">
        <p class="title">
          SERVICES
        </p>
        <div class="links flex dir-column">
          <nuxt-link to="/">
            Web Development
          </nuxt-link>
          <nuxt-link to="/">
            Mobile Development
          </nuxt-link>
          <nuxt-link to="/">
            UI/UX Design
          </nuxt-link>
        </div>
      </div>
      <div class="products-links">
        <p class="title">
          PRODUCTS
        </p>
        <div class="links flex dir-column">
          <nuxt-link to="/">
            Project-FED
          </nuxt-link>
          <nuxt-link to="/">
            Other Products
          </nuxt-link>
        </div>
      </div>
      <div class="contact-links">
        <p class="title">
          CONTACT
        </p>
        <div class="links flex dir-column">
          <div class="grid">
            <img src="/svg/call-answer.svg" alt="">
            <nuxt-link to="/">
              +1 (978) 849-4391
            </nuxt-link>
          </div>
          <div class="grid">
            <img src="/svg/close-envelope.svg" alt="">
            <nuxt-link to="/">
              contact@fluidangle.com
            </nuxt-link>
          </div>
          <div class="social-media flex">
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
    <div class="footer-bottom container flex dir-row">
      <div>
        <p> Copyright (c) {{ new Date().getFullYear() }}</p>
      </div>
      <div class="links">
        <nuxt-link to="/">
          Terms of uses
        </nuxt-link>
        <nuxt-link to="/">
          Privacy Policy
        </nuxt-link>
        <nuxt-link to="/">
          Sitemap
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  footer {
    padding: {
      top: 3rem;
    };

    .footer-grid {
      min-height: 18rem;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 3.5rem;
      @include breakpoint($max: 768px){
        grid-template-columns: repeat(2, 1fr);
      }
      @include for-phone-only {
        grid-template-columns: auto;
      }
      .title {
        border: {
          bottom: solid 2px $light-purple;
        }
        padding: {
          bottom: 1.6rem;
        }
        margin: {
          bottom: 1.8rem;
        }
      }

      .links {
        color: rgba(#2b2b2b,0.63);
        a{
          margin:{
            bottom:0.8rem;
          }
          font-weight: 500;
        }
        img{
          margin-right: .2rem;
        }
      }
      .contact-links{
        .grid{
          grid-template-columns: 10% 1fr;
          align-items: center;
          margin:{bottom:0.8rem;}
          a{
            margin: 0;
          }
        }
      }
    }

    .footer-bottom {
      padding: 1.8rem 0;
      justify-content: space-between;

      .links {
        flex-direction: row;
        color: $grey;

        a{
          margin-left: .8rem;
        }
      }
    }
  }
</style>
