<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content container">
          <h1>
            OUR WORK
          </h1>
          <p>
            Over the years we have worked with many businesses in diverse industries.
            We are proud of our portfolio and we believe you’ll love it too.
          </p>
          <button>23 <br>Projects</button>
        </div>
      </div>
    </div>
    <statistics />
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Work',
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
        height: 85vh;
        z-index: -1;
      }
      .banner-grid {
        display: grid;
        grid-template-columns: 2fr 3fr;
        padding: 4rem 5vw 0;
        overflow-x: hidden;
      }

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .build {
          position: relative;

          .replace {
            position: absolute;
            top: -2.5rem;
            font-family: 'Montez', cursive;
          }

          .text {
            text-decoration: {
              style: solid;
              line: line-through;
              color: #ffb102;
            };
          }
        }

        p {
          font-size: .85rem;
          line-height: 2;
        }

        button {
          color: $primary;
          background: white;
          border: none;
          padding: .9rem 2.25rem;
          font-size: .9rem;
          margin: 3rem 0;

          &:focus {
            outline: none;
          }
        }
      }

      .banner-img {
        box-sizing: border-box;
        position: relative;

        img {
          width: 135%;
          max-width: unset;
          z-index: 5;
          position: relative;
        }
      }
    }
    }
</style>
