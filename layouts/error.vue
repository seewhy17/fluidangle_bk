<template>
  <div class="not-found">
    <div class="not-found-bg" />
    <div class="content">
      <div class="error-code">
        <h1 v-if="error.statusCode === 404">
          404
        </h1>
        <h1 v-else>
          Oops!
        </h1>
      </div>
      <p v-if="error.statusCode === 404" class="description">
        Sorry, This page could not found.
      </p>
      <p v-else class="description">
        An error occurred.
      </p>
      <div class="links flex flex-row">
        <nuxt-link to="/" class="home">
          Home page
        </nuxt-link>
        <nuxt-link to="/contact" class="contact">
          Contact Us
        </nuxt-link>
      </div>
      <div class="social-media flex">
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
            style="width: 39px;"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: function () {
        return {
          statusCode: 404
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .not-found {
    position: relative;
    min-height: 100vh;

    .not-found-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: {
        image: url("/img/error-background.jpg");
        size: cover;
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba($primary, 0.7)
      }
    }

    .content {
      position: relative;
      text-align: center;
      width: 100%;
      padding: 5vh;
      color: $light;
      @include breakpoint($max: 768px) {
        padding: {
          top: 15vh;
        }
      }
      .error-code {
        font: {
          weight: 900;
          size: 8rem;
        }
        @include breakpoint($max: 768px) {
          font: {
            size: 5rem;
          }
        }

        h1 {
          line-height: 1;
        }
      }

      p {
        text: {
          transform: uppercase;
        }
        font: {
          weight: 700;
        }

        &.description {
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: .1rem;
          font-size: 1.75rem;
          @include breakpoint($max: 768px) {
            font: {
              size: 1rem;
            }
          }
        }
      }

      .links {
        justify-content: center;
        margin: {
          top: 2rem;
        };

        a {
          margin: {
            left: 1rem;
          };
          font-weight: 700;
          text-decoration: none;
          background-color: transparent;
          border: 2px solid transparent;
          text-transform: uppercase;
          padding: 1rem 1.5rem;
          font-size: 1.2rem;
          border-radius: 20px;
          transition: 0.2s all;

          &.home {
            color: rgba($primary, 0.7);
            background: $light;

            &:hover {
              background: $primary;
              color: rgba($light, 0.9);
              border: 2px solid rgba($light, 0.9);
            }
          }

          &.contact {
            border: 2px solid rgba($light, 0.9);
            color: rgba($light, 0.9);

            &:hover {
              color: rgba($primary, 0.7);
              background: $light;
            }
          }
        }
      }

      .social-media {
        justify-content: center;
        margin: {
          top: 2rem;
        };

        a {
          margin: {
            right: 2.5rem;
            left: 2.5rem;
          }
        }
      }
    }
  }
</style>
