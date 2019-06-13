<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block text-center">
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
        <h2 class="text-center Get-An-Estimate">
          Get An Estimate
        </h2>
        <div class="content" />
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
  .text-center {
    text-align: center;
  }

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
            font-size: 54px;
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
        margin:{
          top:40vh;
        }
        .Image-3{
          /*width: 888px;*/
          /*height: 520px;*/
          position: absolute;
          z-index: -1;
          top: -30vh;
          margin: 0 auto;
          left: 0;
          right:0;
        }
        .Get-An-Estimate{
          font-size: 48px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.21;
          letter-spacing: normal;
          color: #ffffff;
        }
        .content{
          height: 100vh;
        }
      }
    }
  }
</style>
