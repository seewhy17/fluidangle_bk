<template>
  <scroll-fixed-header :fixed.sync="fixed" :threshold="200">
    <nav>
      <nuxt-link to="/" class="brand">
        <img src="/svg/fluid-angle_white.svg" alt="fluid-logo">
      </nuxt-link>
      <div class="links">
        <nuxt-link to="/work">
          Work
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
        <a class="phone hide-on-med-and-down" href="tel:+19788494391">
          <img src="/svg/phone-receiver.svg" alt="phone">
          +1 (978) 849-4391
        </a>
      </div>
    </nav>
  </scroll-fixed-header>
</template>
<script>
export default {
  name: 'Navbar',
  data: () => ({
    fixed: true
  })
}
</script>
<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: {
      bottom: 1rem;
      left: 5vw;
      right: 5vw;
    }

    a {
      color: white;
    }

    .brand {
      img {
        width: 6rem;
      }
    }

    .links {
      display: flex;
      align-items: center;

      a {
        padding: 0 1rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 500;

        &.phone {
          display: flex;
          align-items: center;
          border-left: 1px solid white;

          img {
            width: 1rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
</style>
