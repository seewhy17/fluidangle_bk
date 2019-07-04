<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <h1>
            We
            <span class="build">
              <span class="replace">Fluid</span>
              <span class="text">build</span>
            </span>
            & Develop <br>
            Digital Products
          </h1>
          <p>
            We design and develop awesome products for Web and Mobile from User Research to Product Design to
            Development.
          </p>
          <a href="/work" class="header-link">See our work</a>
        </div>
        <div class="banner-img hide-on-small">
          <img src="/img/expo_demo.png" alt="expo-demo">
        </div>
      </div>
    </div>

    <section class="section our-offer grid equal-two">
      <div class="img-part hide-on-small">
        <div class="img-box">
          <img src="/svg/laptop.svg" alt="laptop" class="img-laptop">
        </div>
        <div class="img-box">
          <img src="/svg/smartphone.svg" alt="smartphone" class="img-smartphone">
        </div>
      </div>
      <div class="content-part">
        <span class="fancy-heading bold">
          What we offer
        </span>
        <p class="flow-text">
          We develop user-centered digital products <br> and services for your customers
        </p>
        <p>
          Our team comprises of brilliant web and mobile app developers. We deliver projects on time and maintain the
          top-notch code standards. We offer you the best concepts and ideas.
        </p>
      </div>
    </section>

    <section class="section our-work">
      <span class="fancy-heading bold">
        our Work
      </span>
      <div class="content-grid">
        <div class="a-work grid equal-two">
          <div class="content-part">
            <img src="/svg/heroshe-colored.svg" class="partner-logo" alt="heroshe">
            <p class="work-headline">
              We ship from any US <br> Online Store
            </p>
            <a class="action-word" href="/projects/heroshe">View case study
              <chevron-right />
            </a>
          </div>
          <div class="image-part">
            <img src="/img/herose_hero.png" alt="heroshe-image">
          </div>
        </div>

        <div class="a-work grid equal-two">
          <div class="image-part">
            <img src="/img/plinkd_hero.png" alt="heroshe-image">
          </div>
          <div class="content-part">
            <img src="/svg/PLINKD_logo.svg" class="partner-logo plinkd" alt="PLINKD">
            <p class="work-headline">
              One Location <br> Connecting Friends
            </p>
            <a class="action-word" href="/projects/plinkd">View case study
              <chevron-right />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section our-services">
      <div class="arrow-up flex">
        <a class="bold"><img src="/svg/keyboard-right-arrow-button.svg" alt=""></a>
      </div>
      <div class="wrapper">
        <span class="fancy-heading bold">
          Our Services
        </span>
        <div class="content-grid grid equal-two">
          <div class="services-part">
            <div class="services-grid container grid equal-two no-gap">
              <div class="service">
                <p class="service-title">
                  Web
                </p>
                <div class="service-options">
                  <p>Frontend</p>
                  <p>Backend</p>
                </div>
              </div>
              <div class="service">
                <p class="service-title">
                  Mobile
                </p>
                <div class="service-options">
                  <p>iOS Platform</p>
                  <p>Android</p>
                </div>
              </div>
              <div class="service">
                <p class="service-title">
                  Design
                </p>
                <div class="service-options">
                  <p>UI/UX</p>
                  <p>Sketching</p>
                  <p>Prototyping</p>
                </div>
              </div>
              <div class="service">
                <p class="service-title">
                  Testing
                </p>
                <div class="service-options">
                  <p>Usability Test</p>
                  <p>Performance</p>
                  <p>Security</p>
                </div>
              </div>
            </div>
          </div>
          <div class="image-part hide-on-small">
            <img
              src="/img/shutterstock_758031970.png"
              srcset="/img/shutterstock-758031970@2x.png 2x,
             /img/shutterstock-758031970@3x.png 3x"
              alt="services"
            >
          </div>
        </div>
      </div>
    </section>

    <statistics />
    <start-project />
    <Footer />
  </div>
</template>
<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Index',
  components: {
    NavBar,
    Footer,
    ChevronRight: () => ({ component: import('vue-material-design-icons/ChevronRight.vue') }),
    'Statistics': () => ({ component: import('~/components/statistics.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  },
  data: () => ({})
}
</script>

<style scoped lang="scss">
  .three {
    grid-template-columns: repeat(3, 1fr);
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
        background: {
          color: $primary;
          image: url('/img/bg-lines.png');
          size: cover;
          repeat: no-repeat;
          position: center center;
        }
        height: 90%;
        z-index: -1;
        /*@include breakpoint($max:768px){
          height: 100vh;
        }*/
      }

      .banner-grid {
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        padding:{
          left:5vw;
        }
        overflow-x: hidden;
        @include for-phone-only {
          grid-template-columns: 1fr;
        }
      }

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 4.5rem;

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          @include breakpoint($max: 768px) {
            font-size: 2rem;
          }
          span{
            font-family: 'sailecbold', serif
          }
        }

        .build {
          position: relative;

          .replace {
            position: absolute;
            top: -3.5rem;
            font-family: 'satisfactionregular', cursive;
            color: #ffb102;
            left: -20%;
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
          font-size: 1rem;
          line-height: 2;
        }

        .header-link {
          display: inline-block;
          color: $primary;
          background: white;
          border: none;
          padding: .9rem 2.25rem;
          font-size: .9rem;
          margin: 3rem 0;
          transition: {
            timing-function: ease-in-out;
          };

          &:focus {
            outline: none;
          }

          &:hover {
            background: $primary;
            color: white;
            border: solid 2px $light;
          }
        }
      }

      .banner-img {
        box-sizing: border-box;
        position: relative;

        img {
          height:85vh;
          object-fit: contain;
          width: 135%;
          max-width: unset;
          z-index: 5;
          position: relative;
          top: 0;
          //right: -11rem;
        }
      }
    }

    .section {
      .fancy-heading {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        color: $primary;
        font-size: .9rem;
        margin-bottom: 1rem;

        &:before {
          content: '';
          height: 1.8px;
          width: 6rem;
          margin-right: 1rem;
          background: $primary;
        }
      }

      &.our-offer {
        margin-top: 5rem;
        padding-bottom: 3rem;
        @include breakpoint($max: 768px) {
          grid-template-columns: auto;
          padding: {
            left: 5%;
          };
        }

        .img-part {
          display: flex;
          justify-content: left;
          align-items: center;
          padding-left: 10vw;

          .img-box {
            border: 2px solid $pale-purple;
            border-radius: 10px;
            display: inline-flex;
            height: 10rem;
            width: 10.8rem;
            justify-content: center;
            align-items: center;
            margin-right: 2vw;

            .img-smartphone {
              width: 20%;
            }

            .img-laptop {
              width: 35%;
            }
          }
        }

        .content-part {
          padding-right: 10vw;

          .flow-text {
            font-size: 1.5rem;
            margin-bottom: 1rem;

            & + p {
              width: 80%;
              font-size: 1rem;
              color: $gray;
            }
          }
        }
      }

      &.our-work {
        padding: 4rem 10vw;

        .a-work {
          margin-bottom: 10rem;

          .content-part {
            padding-left: 5rem;
          }
        }

        .fancy-heading {
          margin-bottom: 4rem;
        }

        .partner-logo {
          margin-bottom: 1.5rem;

          &.plinkd {
            height: 3rem;
          }
        }

        .work-headline {
          font-size: 1.15rem;
          font-weight: 500;
        }

        .action-word {
          text-transform: uppercase;
          font-weight: 600;
          font-size: 1rem;
          margin-top: 1.5rem;
          display: inline-flex;
          align-content: center;
          color: $primary;

          & > span {
            margin-left: 1rem;
            font-size: 1.2rem;
          }
        }

        .image-part {
          img {
            height: 25rem;
            margin-top: -3.5rem;
            object-fit: cover;
          }
        }
      }

      &.our-services {
        background-color: rgba(#e3e8f1, 0.25);
        position: relative;

        .wrapper {
          padding: {
            top: 4rem;
            bottom: 4rem
          };
        }

        .fancy-heading {
          margin: {
            left: 10vw;
          };
        }

        .content-grid {
          @include breakpoint($max: 768px) {
            grid-template-columns: auto;
          }
        }

        .services-grid {
          margin: {
            top: 5%;
          }
          height: 80%;
          min-width: 50%;
          width: 50%;
        }

        .service {
          padding: {
            top: 3rem;
            right: 1.5rem;
            bottom: 2rem;
          }

          &:nth-child(odd) {
            border: {
              right: solid 1px $light-purple;
            }
          }

          &:nth-child(even) {
            padding-left: 3rem;
            border: {
              left: solid 1px $light-purple;
            }
          }

          &:nth-child(-n+2) {
            border: {
              bottom: solid 1px $light-purple;
            }
          }

          &:nth-child(n+3) {
            border: {
              top: solid 1px $light-purple;
            }
          }

          .service-title {
            color: $gray;
            font-size: 1.5rem;
            margin: {
              bottom: 2.1rem;
            }
          }

          .service-options {
            color: $dark-gray;
          }
        }

        .image-part {
          img {
            height: 30rem;
            object-fit: cover;
          }
        }
      }
    }
  }

  .arrow-up {
    color: $primary;
    font-size: 1.8rem;
    justify-content: center;

    a {
      padding: 1rem 1.5rem 2rem;
      background: linear-gradient(rgba(#e3e8f1, 0.25) 50%, rgba($light, 0) 55%);
      @include for-phone-only {
        background: linear-gradient(rgba(#e3e8f1, 0.25) 40%, rgba($light, 0) 55%);
      }
      border-radius: 100%;
      position: absolute;
      top: -7%;
    }
  }

  .partner-logo {
    height: 2rem;
  }

  footer {
    padding: {
      top: 3rem;
    };

    .footer-grid {
      height: 18rem;
      grid-template-columns: repeat(4, 1fr);

      .title {
        border: {
          bottom: solid 2px $light-purple;
        }
        padding: {
          bottom: 1.6rem;
        }
        margin: {
          bottom: 1.8rem;
        }
      }

      .links {
        color: $light-gray;

        a {
          margin: {
            bottom: 0.8rem;
          }
        }

        img {
          margin-right: .2rem;
        }
      }
    }

    .footer-bottom {
      padding: 1.8rem 0;
      justify-content: space-between;

      .links {
        flex-direction: row;
        color: $grey;

        a {
          margin-left: .8rem;
        }
      }
    }
  }
</style>
