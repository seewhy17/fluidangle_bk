<template>
  <nav>
    <nuxt-link to="/" class="brand">
      <img src="/svg/fluid-angle_white.svg" alt="fluid-logo">
    </nuxt-link>
    <div class="links">
      <nuxt-link to="/">
        Work
      </nuxt-link>
      <nuxt-link to="/">
        About
      </nuxt-link>
      <nuxt-link to="/">
        Blog
      </nuxt-link>
      <nuxt-link to="/">
        Contact
      </nuxt-link>
      <a class="phone" href="tel:+19788494391">
        <img src="/svg/phone-receiver.svg" alt="phone">
        +1 (978) 849-4391
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 0 5vw;

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
    align-items: flex-start;

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
