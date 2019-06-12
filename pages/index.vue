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
              <!-- <span class="replace">Fluid</span> -->
              <span class="text">build</span>
            </span>
            & Develop <br>
            Digital Products
          </h1>
          <p>We design and develop awesome products for Web and Mobile from User Research to Product Design to Development.</p>
          <button>See our work</button>
        </div>
        <div class="banner-img">
          <img src="/img/expo_demo.png" alt="expo-demo">
        </div>
      </div>
    </div>
    <section class="section our-offer grid equal-two">
      <div class="img-part">
        <div class="img-box">
          <img src="/svg/laptop.svg" alt="laptop">
        </div>
        <div class="img-box">
          <img src="/svg/smartphone.svg" alt="smartphone">
        </div>
      </div>
      <div class="content-part">
        <span class="fancy-heading">
          What we offer
        </span>
        <p class="flow-text">
          We develop user-centered digital products <br> and services for your customers
        </p>
        <p>
          Our team comprises of brilliant web and mobile app developers. We deliver projects on time and maintain the top-notch code standards. We offer you the best concepts and ideas.
        </p>
      </div>
    </section>
    <section class="section our-work">
      <span class="fancy-heading">
        our Work
      </span>
      <div class="content-grid">
        <div class="a-work grid equal-two">
          <div class="content-part">
            <img src="/svg/heroshe-colored.svg" class="partner-logo" alt="heroshe">
            <p class="work-headline">
              We ship from any US <br> Online Store
            </p>
            <span class="action-word">View case study</span>
          </div>
          <div class="image-part">
            <!-- <img src="/img/heroshe_hero.jpg" alt="heroshe-image"> -->
            <img src="/img/herose_hero.png" alt="heroshe-image">
          </div>
        </div>

        <div class="a-work grid equal-two">
          <div class="image-part">
            <!-- <img src="/img/plinkd_hero.jpg" alt="heroshe-image"> -->
            <img src="/img/plinkd_hero.png" alt="heroshe-image">
          </div>
          <div class="content-part">
            <img src="/svg/PLINKD_logo.svg" class="partner-logo plinkd" alt="PLINKD">
            <p class="work-headline">
              One Location <br> Connecting Friends
            </p>
            <span class="action-word">View case study</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
export default {
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
      background: $primary;
      height: 85vh;
      z-index: -1;
    }

    .banner-grid {
      display: grid;
      grid-template-columns: 2fr 3fr;
      padding: 4rem 5vw 0;
      overflow-x: hidden;

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
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
          font-weight: 500;
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
          position: absolute;
          width: 135%;
          max-width: unset;
          z-index: 5;
          position: relative;
        }
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
      font-weight: 500;
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

      .img-part {
        display: flex;
        justify-content: center;
        align-items: center;
        .img-box {
          border: 2px solid $pale-purple;
          border-radius: 10px;
          display: inline-flex;
          height: 8rem;
          width: 10rem;
          justify-content: center;
          align-items: center;
          margin-right: 2vw;

          img {
            width: 30%;
          }
        }
      }
      .content-part {
        padding-right: 10vw;

        .flow-text {
          font-size: 1.15rem;
          margin-bottom: 1rem;

          &+p {
            font-size: .75rem;
            color: $gray;
          }
        }
      }
    }

    &.our-work {
      padding: 4rem 10vw;

      .a-work {
        margin-bottom: 10rem;
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
        font-size: .8rem;
        margin-top: 1.5rem;
        display: block;
        font-weight: 500;
        color: $primary;
      }

      .image-part {
        img {
          height: 20rem;
          margin-top: -3.5rem;
          object-fit: cover;
        }
      }
    }
  }
}

.partner-logo {
  height: 2rem;
}
</style>
