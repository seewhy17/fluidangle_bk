<template>
  <nav>
    <nuxt-link to="/" class="brand">
      <img src="/svg/fluid-angle_purple.svg" alt="fluid-logo">
    </nuxt-link>
    <div class="links">
      <nuxt-link to="/">
        Work
      </nuxt-link>
      <nuxt-link to="/">
        About Us
      </nuxt-link>
      <nuxt-link to="/">
        Blog
      </nuxt-link>
      <nuxt-link to="/">
        Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  a {
    color: #555555;
  }

  .brand {
    img {
      width: 6rem;
    }
  }

  .links {
    display: flex;
    align-items: flex-start;

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
