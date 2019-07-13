<template>
  <section class="section our-statistics">
    <div class="container flex dir-row statistics-grid">
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-clients-b5bbbd87.png"
            alt="stats-clients"
          >
        </div>
        <div class="content">
          <p class="amount">
            60+
          </p>
          <p class="comment">
            HAPPY CLIENTS
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-commits-5a037d2c.png"
            alt="stats-commits"
          >
        </div>
        <div class="content">
          <p class="amount">
            90+
          </p>
          <p class="comment">
            SUCCESSFUL PROJECT
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-projects-efbd5c8b.png"
            alt="stats-projects"
          >
        </div>
        <div class="content">
          <p class="amount">
            63+
          </p>
          <p class="comment">
            ACCEPTED USER STORIES
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-user-stories-a8e2c535.png"
            alt="stats-user-stories"
          >
        </div>
        <div class="content">
          <p class="amount">
            339+
          </p>
          <p class="comment">
            DELIVERED GIT COMMITS
          </p>
        </div>
      </div>
    </div>
    <div class="container grid works-grid">
      <div>
        <p class="content-text">
          People that trust our work
        </p>
      </div>
      <div>
        <img src="/svg/heroshe-colored.svg" class="partner-logo" alt="heroshe">
      </div>
      <div>
        <img
          src="/img/Screenshot 2019-05-01 at 6.25.48 AM.png"
          alt="proto"
        >
      </div>
      <div>
        <img
          src="/img/tree.png"
          alt="plinkd"
        >
      </div>
      <div>
        <img
          src="/img/LOGO text_colored.png"
          alt="treeApp"
        >
      </div>
    </div>
    <div class="clients container">
      <div class="image-part grid">
        <span />
        <hooper ref="carousel" :settings="hooperSettings">
          <slide v-for="(slide, index) in slides" :key="index" :index="index">
            <img :src="slide.img" alt="">
          </slide>
        </hooper>
        <span />
      </div>
      <div class="content-box flex dir-column">
        <p class="text center-align">
          FluidAngle team are awesome guys to work with. <br>
          I highly recommend them to get your project done ASAP and perfect delivery
        </p>
        <p class="role">
          Sarah - MD, ProntoCare
        </p>
        <div class="controls flex list dir-row">
          <CheckboxBlankCircle fill-color="#d5d5d5" title="previous" class="prev" @click.prevent="slidePrev" />
          <CheckboxBlankCircle fill-color="#d5d5d5" class="middle-control" />
          <CheckboxBlankCircle fill-color="#d5d5d5" title="next" class="next" @click.prevent="slideNext" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'Statistics',
  components: {
    CheckboxBlankCircle: () => ({ component: import('vue-material-design-icons/CheckboxBlankCircle.vue') }),
    Hooper,
    Slide
  },
  data: () => ({
    slides: [],
    hooperSettings: {
      centerMode: true
    }
  }),
  mounted() {
    this.slides = [
      {
        img: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/v1561570127/fluidangle/img/xd/Rectangle_1744.png')
      },
      {
        img: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/v1561570127/fluidangle/img/xd/Rectangle_1744.png')
      }
    ]
  },
  methods: {
    getImageUrl(url) {
      return this.$cloudinary
        .url(url)
    },
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>

<style scoped lang="scss">
  .our-statistics {
    margin-top: 5rem;
    padding-bottom: 3rem;

    .statistics-grid {
      align-items: center;
    }

    .stats {
      width: 25%;
      justify-items: center;
      text-align: center;
      margin-bottom: 5%;
      @include for-phone-only {
        width: 100%;
        border-left: 0;
        border-bottom: solid 2px $light-purple;
      }

      &:nth-child(n+2) {
        @include for-tablet-portrait-up {
          border-left: solid 2px $light-purple;
        }
      }

      .amount {
        font-size: 3.2rem;
        font-weight: 600;
        color: $dark-grey;
      }

      .comment {
        font-size: .8rem;
        color: $light-gray;
        font-weight: 600;
      }
    }

    .works-grid {
      width: 70%;
      min-width: 70%;
      margin: {
        top: 5rem;
      }
      grid-template-columns: 2fr repeat(4, 1fr);
      @include breakpoint($max: 768px) {
        grid-template-columns: auto
      }
      align-items: center;

      & > div {
        &:nth-child(1) {
          font-size: 1.2rem;
          color:$dark-gray;
        }

        display: flex;
        justify-content: center;
        align-content: center;
      }

      .content-text {
        font-size: 1rem;
      }
    }

    .clients {
      padding-bottom: 5rem;
      .image-part {
        grid-template-columns: 1fr 7.6rem 1fr;
        grid-gap: 2rem;
        padding-top: 5%;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        span{
          height: 2px;
          background-color: rgba($light-gray,.8);
        }
        img {
          box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16);
          border: solid 4px $light;
          height: 7.5rem;
          border-radius: 50%;
          width: 7.5rem;
          object-fit: cover;
          object-position: center;
        }
      }

      .content-box {
        align-items: center;

        .text {
          color: $gray;
          margin-bottom: 1.5rem;
        }

        .role {
          font-size: 1.2rem;
          font-weight: 500;
          color: #62c9cb;
          font-style: italic;
        }
      }
      .hooper{
        height: auto;
      }
      .controls{
        font-size: 1rem;
        padding: {
          top:1rem;
        };
        svg{
          margin-left: 1rem;
        }
        & .prev:hover,
        & .next:hover{
          cursor: pointer;
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
