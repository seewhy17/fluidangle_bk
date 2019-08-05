<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="blocks-container">
        <img
          src="/img/app-estimator/Image 3.png"
          alt=""
          class="Image-3"
        >
        <h2 class="center-align Get-An-Estimate">
          APP PRICE ESTIMATION
        </h2>
        <div class="content container">
          <p class="price">
            Total Cost: <span>{{ formatCurrency(getPrice.low) }}</span><span v-if="getPrice.high > 0"> - {{ formatCurrency(getPrice.high) }}</span>
          </p>
          <p class="rates">
            Based on rates
          </p>
          <small class="disclaimer">
            Please note, all cost estimates are intended to be indicative of development costs and timescales only and are exclusive of all hosting costs, paid services or purchased assets of any kind.
            All prices are in USD and inclusive of sales tax.
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/partials/customNavBar2.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AppEstimatorResult',
  head() {
    return {
      title: 'App Estimator Result',
      meta: [
        { hid: 'description', name: 'description', content: 'Get App Estimated Pricing' }
      ]
    }
  },
  components: {
    NavBar
  },
  computed: {
    ...mapGetters([
      'getPrice'
    ])
  },
  methods: {
    formatCurrency(number) {
      const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      return formatter.format(number)
    }
  }
}
</script>

<style scoped lang="scss">
  .three {
    grid-template-columns: 0.25fr 1fr auto;
  }

  .two-auto {
    grid-template-columns: 1fr auto;
  }

  .no-gap {
    grid-gap: 0;
  }
  .page {
    .banner {
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background-image: linear-gradient(184deg, #503cbe, #4527a0);
        height: 85vh;
        z-index: -1;
      }
      nav{
        a{
          color:$light;
        }
      }
      .banner-grid {
        .content {
          padding: {
            top: 2%;
          };
        }

        .title-block {
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.2;

          h1 {
            font-size: 3em;
            letter-spacing: normal;
            color: #3c2a9d;
          }

          p {
            font-size: 29px;
            color: #454545;

          }
        }
      }
      .blocks-container {
        background: $light;
        position: relative;
        margin: {
          top: 65vh;
        }
        padding: {
          top: 3%;
        };

        .Image-3 {
          /*width: 888px;*/
          /*height: 520px;*/
          position: absolute;
          z-index: -1;
          top: -50vh;
          margin: 0 auto;
          left: 0;
          right: 0;
        }

        .Get-An-Estimate {
          font-size: 48px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.21;
          letter-spacing: normal;
          color: $primary;
          margin: {
            bottom: 3%;
          };
        }

        .content {
          min-height: 40vh;
          padding: {
            bottom: 5vh;
          }
          color:$grey;
          .price{
            font-size: 3rem;
            font-weight: 700;
          }
          .rates{
            font-size: 1.6rem;
          }

        }
      }
    }
  }
</style>
