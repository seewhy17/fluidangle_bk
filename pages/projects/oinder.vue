<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <section class="banner-grid">
        <div class="content">
          <div class="title-block center-align">
            <h1 class="title" />
            <div class="image-part flex">
              <img
                :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Oinder.png')"
                alt=""
              >
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="container project-container">
      <section class="summary grid">
        <div class="content-box">
          <p class="title">
            Oinder
          </p>
          <div class="content introduction">
            <p>
              Oinder is a problem sharing and solving community that enables people share personal day to day challenges while also keeping them anonymous by providing them with aliases or different identities.
            </p>
            <br>
          </div>
          <div class="stats grid">
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  30
                </p>
                <p class="comment center-align">
                  SCREENS
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  0.9k
                </p>
                <p class="comment center-align">
                  HOURS SPENT
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  3
                </p>
                <p class="comment center-align">
                  PEOPLE INVOLVED
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="info-box">
          <div class="links">
          </div>
          <div class="app-stores grid">
            <div class="image flex">
              <a href="https://play.google.com/store/apps/details?id=com.oinder" target="_blank">
                <img src="/img/Image 20.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="process">
        <div class="content-box grid equal-two">
          <div class="challenge">
            <h2 class="title">
              The Challenge
            </h2>
            <p class="text">
              The client noticed that at one point or the other people got depressed while facing personal challenges that they felt was too difficult to share with their loved ones or relatives.</p>
            <p class="text">They wanted to create a place where individual could share their problems without being judged.
            </p>
          </div>
          <div class="what-we-did">
            <h2 class="title">
              What we did
            </h2>
            <div class="content">
              <p class="text">
                The App is designed to eliminate the fear of one’s own identity, by allowing people to share their concerns or provide advice, recommendations or answers where necessary and anonymously too.
              </p>
              <p class="text">
                Users on Oinder can ask or answer questions which allows people to create a stream of information aligned with their audience's interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery">
      <div class="main-image">
        <img
          :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Oinder_02.png')"
          alt=""
        >
      </div>
      <div class="container details grid equal-two full-mobile">
        <div class="wrapper">
          <h2 class="title">
            Oinder App
          </h2>
          <div class="content-box">
            <div class="content">
              <p class="text">Oinder is designed to enable you share your personal problems without the fear of your real identity been revealed. Your privacy is our priority, so we keep everyone in the community anonymous. Without fear of revealing your real identity, you can easily open up and share with the community any personal issue or problem that really bothers you. After which you receive advice and opinion from various people within the community. </p>
              <br>
              <p class="text">Oinder is the safest place you can share your personal problems online and receive great
                advice. Join us today, share your story, and hopefully find a possible solution. The world is a better
                place when we come together.</p>
            </div>
          </div>
        </div>
        <div class="image-part hide-on-small">
          <img
            :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Oinder_01.png')"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="tools-used">
      <div class="header">
        <p class="title center-align">
          TOOLS WE USED
        </p>
      </div>
      <div class="wrapper grid equal-two container">
        <div class="technologies">
          <p class="title">
            TECHNOLOGIES
          </p>
          <div class="technologies-grid flex dir-row list">
            <div v-for="technology in technologies" :key="technology.id" class="technology">
              <div class="image-part">
                <img :src="technology.image" alt="">
              </div>
              <div class="text">
                <p>{{ technology.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="integrations">
          <p class="title">
            INTEGRATIONS
          </p>
          <div class="integrations-grid flex dir-row list">
            <div v-for="integration in integrations" :key="integration.id" class="integration">
              <div class="image-part">
                <img :src="integration.image" alt="">
              </div>
              <div class="text">
                <p>{{ integration.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shortcut-menus
      :left-menu="{image:'/img/LOGO text_colored.png',url:'/projects/plinkd'}"
      :right-menu="{image:'/img/heroshe-colored.png',url:'/projects/heroshe'}"
    />
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Oinder',
  head() {
    return {
      title: 'Fluidangle --Oinder',
      meta: [
        { hid: 'description', name: 'description', content: 'Oinder Work By Fluidangle' }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
    shortcutMenus: () => ({ component: import('~/components/shortCutMenus.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  },
  data: () => ({
    technologies: [
      {
        id: 'flutter',
        text: '',
        image: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg'
      },
      {
        id: 'dart',
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563191800/fluidangle/svg/dart.svg'
      },
      {
        id: 'kotlin',
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563292713/fluidangle/svg/kotlinlang-ar21.svg'
      },
      {
        id: 'swift',
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563292723/fluidangle/svg/swift-ar21.svg'
      }
    ],
    integrations: [
      {
        id: 'firebase',
        text: '',
        image: 'https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg'
      }
    ]
  }),
  methods: {
    getImageUrl(url) {
      return this.$cloudinary
        .url(url)
    }
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
        background: {
          color: #877afb;
          image: url('/img/bg-lines.png');
          size: cover;
          repeat: no-repeat;
          position: center center;
        }
        height: 100%;
        z-index: -1;
      }

      .banner-grid {
        padding: 0 5vw 0;
        overflow-x: hidden;

        .image-part {
          justify-content: center;

          img {
            width: 60%;
          }
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

          img {
            width: 20%;
          }
        }

        p {
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.43;
          margin: {
            bottom: 1rem;
          }
        }
      }
    }

    .project-container {
      .summary {
        grid-template-columns: 2fr 1fr;
        @include breakpoint($max: 768px) {
          grid-template-columns: 1fr;
        }
        grid-gap: 5rem;
        padding: {
          top: 5rem;
        };
        margin: {
          bottom: 4rem;
        }

        .content-box {
          .title {
            font-weight: 500;
            line-height: 1.61;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
        }

        .introduction {
          margin-bottom: 3rem;

          p {
            font-size: .9rem;
          }
        }
      }

      .process {
        margin-bottom: 2rem;

        .content-box {
          justify-items: end;
          @include breakpoint($max: 768px) {
            grid-template-columns: 1fr;
          }

          & > div {
            margin-bottom: 3rem;
          }

          .title {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 1.61;
            color: $gray;
            margin: {
              bottom: 1rem;
            };
          }

          ul {
            padding: 0;
            height: 9rem;
            overflow: hidden;
          }

          .text,
          li {
            font-size: 1rem;
            line-height: 1.44;
            color: $dark-gray;
            font-weight: 500
          }

          .challenge {
            .text {
              width: 70%;
              @include breakpoint($max: 768px){
                width: 90%;
              }
            }
          }

          .what-we-did {
            padding-right: 5rem;
            @include breakpoint($max: 768px){
              padding-right: 1.5rem
            }
          }
        }
      }

      .stats {
        grid-template-columns: 1fr 1.5fr 1fr;
        margin-top: 2rem;

        .stat {
          padding: 1rem 0;

          &:nth-child(2) {
            border: {
              left: solid 2px $light-purple;
              right: solid 2px $light-purple;
            };
          }
        }

        .content-box {
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

      .info-box {
        .links {
          margin-bottom: 1.5rem;

          .link {
            grid-template-columns: 20% 1fr;
            grid-gap: .2rem;
            padding: {
              top: .5rem;
              bottom: .5rem;
              right: 1rem
            };

            .image-part {
              background-color: #dce2e6;
              padding: 1.5rem 1rem 1rem;
            }

            a {
              background-color: #dce2e6;
              padding: 1rem 1.5rem 1rem;
              align-items: center;
              color: $gray;
            }
          }
        }
      }

      .app-stores {
        .image {
          margin-bottom: 1.5rem;

          img {
            object-fit: contain;
            object-position: center;
          }
        }
      }

      .project-team {
        .title {
          font-size: 1.4rem;
          line-height: 1.39;
          color: $dark-gray;
        }
      }
    }

    .gallery {
      .main-image {
        img {
          width: 100%;
          object-fit: cover;
          object-position: center;
          height: 80%;
        }

        margin-bottom: 4rem;
      }

      .details {
        .title {
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .content {
          .text {
            color: $dark-gray;
            line-height: 1.39;
            padding: {
              left:.5rem;
              right: 1rem;
            };
          }
        }

        & > .image-part {
          display: flex;
          justify-content: flex-end;

          img {
            object-fit: contain;
            width: 75%;
          }
        }
      }

      .charts {
        width: 55%;
        min-width: 55%;
        margin-top: 3rem;

        & > div {
          padding: 1.5rem 1rem;
          align-items: center;
          border-radius: 16px;
          box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.08);
          background-color: $light;

          .text {
            margin-bottom: 2rem;
          }

          img {
            width: 60%;
            @include breakpoint($max: 768px){
              width:100%;
            }
          }
        }
      }
    }

    .video-section {
      margin-top: 5rem;

      video {
        width: 100%;
        max-height: 100vh;
      }
    }

    .testimonials {
      margin-top: 5rem;
      padding-bottom: 5rem;

      .image-part {
        padding-top: 5%;
        justify-content: center;
        margin-bottom: 1rem;

        img {
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          border: solid 4px $light;
          height: 10rem;
          border-radius: 50%;
          width: 10rem;
          object-fit: cover;
          object-position: center;
        }
      }

      .content-box {
        align-items: center;

        .title {
          font-size: 1.5rem;
          margin-bottom: .5rem;
          font-weight: 500;
          color: #62c9cb;
        }

        .text {
          color: $gray;
        }

        .role {
          font-size: 1.2rem;
          font-weight: 500;
          color: #62c9cb;
        }
      }
    }

    .tools-used {
      background-color: #f2f2f3;
      padding: {
        top: 3rem;
        bottom: 3rem;
      };

      .header {
        .title {
          color: $gray;
          font: {
            weight: 500;
            size: 1.5rem;
          }
          margin: {
            bottom: 5rem;
          }
        }
      }

      & > .wrapper {
        @include breakpoint($max: 768px) {
          grid-template-columns: 1fr;
        }

        .title {
          line-height: 1.61;
          font-weight: 600;
          font-size: 1.5rem;
          color: $gray;
          margin: {
            bottom: 1rem;
          }
        }
      }

      .technologies {
        padding: {
          left: 5rem;
          right: 5rem;
        };
        border: {
          right: solid 2px $gray;
        };
        @include breakpoint($max: 768px) {
          padding: {
            right: 0;
            left: 3rem;
          }
          border: 0;
        }

        .technologies-grid {
          flex-wrap: wrap;
        }

        .technology {
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          margin-right: 5%;
          margin-bottom: 5%;

          &:first-child {
            flex-grow: 1
          }

          &:nth-last-child(-n+2) {
            flex-grow: .5;
          }

          .image-part {
            img {
              height: 5rem;
              object-position: center;
              object-fit: contain;
            }
          }
        }
      }

      .integrations {
        padding: {
          left: 5rem;
        };
        .integrations-grid{
          flex-wrap: wrap;
        }
        .integration {
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 5%;
          margin-bottom: 5%;

          .image-part {
            img {
              height: 4rem;
              object-position: center;
              object-fit: contain;
            }
          }
        }
      }
    }
  }

</style>
