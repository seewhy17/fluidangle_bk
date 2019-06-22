<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="title">
              <img src="/svg/heroshe-colored_2.svg" alt="Heroshe">
            </h1>
            <p class="">
              Enterprise Base Software
            </p>
            <div class="image-part flex">
              <img src="/img/Heroshe_project.png" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container project-container">
      <section class="summary grid">
        <div class="content-box">
          <p class="title">
            Heroshe
          </p>
          <div class="content">
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              ””Lorem ipsum dolor sit amet, ”
            </p>
          </div>
          <div class="stats grid">
            <div class="stat">
              <div class="content">
                <p class="amount">
                  45
                </p>
                <p class="comment">
                  SCREENS
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content">
                <p class="amount">
                  1.2k
                </p>
                <p class="comment">
                  HOURS SPENT
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content">
                <p class="amount">
                  5
                </p>
                <p class="comment">
                  PEOPLE INVOLVED
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="info-box">
          <div class="links">
            <div class="link grid">
              <div class="image-part flex">
                <img src="/svg/monitor.svg" alt="">
              </div>
              <a href="" class="flex">Visit Website</a>
            </div>
            <div class="link grid">
              <div class="image-part flex">
                <img src="/svg/pdf.svg" alt="">
              </div>
              <a href="" class="flex">Download Case study</a>
            </div>
          </div>
          <div class="app-stores grid equal-two">
            <div class="image flex"><img src="" alt=""></div>
            <div class="image flex"><img src="" alt=""></div>
          </div>
          <div class="project-team">
            <p class="title">PROJECT TEAM</p>
            <div class="image-part flex">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Heroshe',
  components: {
    NavBar,
    Footer,
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
        background: #47b6d2;
        height: 100%;
        z-index: -1;
      }

      .banner-grid {
        padding: 0 5vw 0;
        overflow-x: hidden;
        .image-part{
          justify-content: center;
        }
      }

      .content {
        text-transform: capitalize;
        color: white;
        margin: {
          left: 0
        };

        h1 {
          font-size: 3.5rem;
          img{
            width: 30%;
          }
        }

        p {
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.43;
          margin:{
            bottom: 1rem;}
        }
      }
    }
    .project-container{
      .summary{
        grid-template-columns: 2fr 1fr;
        padding: {
          top:5rem;
        };
        .content-box{
          margin-bottom: 3rem;
          .title{
          font-weight: 500;
          line-height: 1.61;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          }
        }
      }
      .stats{
        grid-template-columns: 1fr 2fr 1fr;
        margin-top: 2rem;
        .stat{
          padding: 1rem 0;
          &:nth-child(2){
            border: {
              left:solid 2px $light-purple;
              right:solid 2px $light-purple;
            };
          }
        }
        .content{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .amount {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.41;
          color: $gray;
        }

        .comment {
          font-size: 1.2rem;
          color: $gray;
          font-weight: normal;
        }
      }
      .info-box{
        .links{
          .link{
            grid-template-columns: 20% 1fr;
            grid-gap: .2rem;
            padding: .5rem 1rem;
            .image-part{
              background-color: #dce2e6;
              padding: 1.5rem 1rem 1rem;
            }
            a{
              background-color: #dce2e6;
              padding: 1rem 1.5rem 1rem;
              align-items: center;
              color: $gray;
            }
          }
        }
      }
    }
  }

</style>
