<template>
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
      <nuxt-link to="/blog">
        Blog
      </nuxt-link>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5vw;
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

      a {
        padding: 0 1rem;
        text-transform: none;
        line-height: 1.19;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
</style>
