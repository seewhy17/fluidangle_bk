<template>
  <scroll-fixed-header :fixed.sync="status" :threshold="200">
    <nav>
      <nuxt-link to="/" class="brand">
        <img src="/svg/fluid-angle_white.svg" alt="fluid-logo">
      </nuxt-link>
      <div class="links">
        <nuxt-link to="/work">
          Work
        </nuxt-link>
        <nuxt-link to="/about">
          About Us
        </nuxt-link>
        <nuxt-link to="/app-estimator">
          App Estimator
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </div>
      <div class="menu-bar">
        <img v-if="mobile === false" src="/svg/menu.svg" alt="menu" class="menu-icon" @click="toggleMobile">
        <img v-else src="/svg/close.svg" class="menu-icon" alt="close" @click="toggleMobile">
      </div>
    </nav>
    <transition name="mobile-transition">
      <div v-if="mobile === true" class="mobile-nav">
        <div class="links flex dir-column list">
          <nuxt-link to="/work">
            Work
          </nuxt-link>
          <nuxt-link to="/about">
            About
          </nuxt-link>
          <nuxt-link to="/app-estimator">
            App Estimator
          </nuxt-link>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
          <a class="phone hide-on-med-and-down" href="tel:+19788494391">
            <img src="/svg/phone-receiver.svg" alt="phone">
            +1 (978) 849-4391
          </a>
        </div>
        <div class="sub-links">
          <div class="grid equal-two">
            <nuxt-link to="/terms-of-use">
              Terms of uses
            </nuxt-link>
            <nuxt-link to="/privacy-policy">
              Privacy Policy
            </nuxt-link>
          </div>
        </div>
        <div class="social-media flex dir-row list">
          <a href="https://www.facebook.com/fluidangle/" title="facebook" target="_blank">
            <img
              src="/img/facebook-logo-button.png"
              alt="facebook"
            >
          </a>
          <a href="https://twitter.com/fluidangle" title="twitter" target="_blank">
            <img
              src="/img/twitter.png"
              alt="twitter"
            >
          </a>
          <a href="https://www.instagram.com/fluidangle/" title="instagram" target="_blank">
            <img
              src="https://image.flaticon.com/icons/svg/1409/1409946.svg"
              alt="instagram"
              style="width: 39px;height:39px;"
            >
          </a>
        </div>
      </div>
    </transition>
  </scroll-fixed-header>
</template>
<script>
export default {
  name: 'CustomNavbar2',
  components: {
    // Menu: () => ({ component: import('vue-material-design-icons/Menu.vue') }),
    // MenuOpen: () => ({ component: import('vue-material-design-icons/MenuOpen.vue') })
  },
  data: () => ({
    status: true,
    mobile: false
  }),
  mounted() {
    this.mobile = false
  },
  methods: {
    toggleMobile() {
      this.mobile = !this.mobile
    }
  }
}
</script>
<style lang="scss" scoped>
  .page {
    .scroll-fixed-header {
      &.is-fixed {
        background-color: $primary;
        padding: {
          top: 0;
        };

        & + div.banner-grid,
        & + section.banner-grid {
          padding-top: 0;
        }
      }
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 5vw;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

    a {
      color: $light;
    }

    .brand {
      img {
        width: 6rem;
      }
    }

    .links {
      display: flex;
      align-items: center;
      @include breakpoint($max: 768px) {
        display: none;
      }

      a {
        padding: 0 1rem;
        line-height: 1.19;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    .menu-bar {
      display: none;
      @include breakpoint($max: 768px) {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 3rem;
      }
    }
  }

  .mobile-nav {
    z-index: 9999;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    overflow-y: scroll;
    background: {
      color: rgba($light, .9);
      image: url('/img/bg-lines.png');
      size: cover;
      repeat: no-repeat;
      position: center center;
    };

    .links {
      width: 100%;
      margin: {
        bottom: 10%;
      }

      a {
        text-align: left;
        font-size: 1.5rem;
        border-bottom: solid thin $light-gray;
        width: 100%;
        color: $dark-grey;
        padding: {
          left: 5%;
          top: 5%;
        };
      }
    }

    .sub-links {
      width: 100%;
      margin: {
        bottom: 10%;
      };
      padding: {
        left: 5%;
      };

      a {
        font-size: 1.2rem;
        color: $dark-grey;
      }
    }

    .social-media {
      width: 100%;
      justify-content: space-evenly;
    }
  }

  .mobile-transition-enter-active,
  .mobile-transition-leave-active {
    transition: all .5s;
  }

  .mobile-transition-enter,
  .mobile-transition-leave-to {
    transform: scaleX(0);
  }
</style>
