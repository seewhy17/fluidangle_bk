<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="LOOKING-TO-BUILD-AN-APP">
              LOOKING TO BUILD AN APP?
            </h1>
            <p class="Find-out-how-much-it-will-cost">
              Find out how much it will cost
            </p>
          </div>
        </div>
      </section>
      <div class="blocks-container">
        <img src="/svg/Image_3.png" alt="" class="Image-3">
        <h2 class="center-align Get-An-Estimate">
          Get An Estimate
        </h2>
        <div class="content">
          <section class="platform container">
            <div class="center-align platform-title-block">
              <h3 class="">
                Platform
              </h3>
              <p>
                Which platform will the app be built on?
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/partials/customNavBar.vue'

export default {
  name: 'AppEstimatorVue',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  .page {
    .banner {
      padding-top: 2rem;
      position: relative;

      .bg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        background: $light;
        height: 85vh;
        z-index: -1;
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
        background-image: linear-gradient(184deg, #503cbe, #4527a0);
        position: relative;
        margin: {
          top: 40vh;
        }
        padding: {
          top: 3%;
        };

        .Image-3 {
          /*width: 888px;*/
          /*height: 520px;*/
          position: absolute;
          z-index: -1;
          top: -30vh;
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
          color: $light;
          margin: {
            bottom: 3%;
          };
        }

        .content {
          height: 100vh;

          .platform {
            height: 463px;
            border-radius: 10px;
            box-shadow: 0 3px 20px 0 rgba(81, 63, 152, 0.54);
            background-color: #ffffff;
            margin: 0 auto;
            padding: 3% 4%;
          }

          .platform-title-block {
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;

            h3 {
              /*width: 168px;*/
              /*height: 54px;*/
              line-height: 1.2;
              font-size: 2.2em;
              color: #4628a1;
            }

            p {
              /*width: 552px;*/
              /*height: 39px;*/
              font-size: 1.8em;
              color: #555555;
            }
          }
        }
      }
    }
  }
</style>
