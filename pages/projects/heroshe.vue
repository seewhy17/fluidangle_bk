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
          <div class="content introduction">
            <p>
              In 2005, Heroshe Co-founder Chichi Ukomadu moved to America to pursue her version of the American dream.
              Before she left Nigeria, she was overjoyed at the prospect of all that was ahead of her. She wasn’t
              prepared for the hardships she would face before she founded Heroshe.
            </p>
            <br>
            <p>
              She ventured into the American job market. She was confident that her Computer Science degree combined
              with her prior experiences at Shell and KPMG Nigeria would allow her have her choice of jobs. She searched
              for months, growing more and more discouraged with each day that passed without a job. Months turned into
              years without a job offer.
            </p>
            <br>
            <p>
              Then, her husband asked her a simple question: “What are you passionate about?” The answer came easily:
              shopping and helping people. “Can you turn either of these passions into a business?” he asked. Then she
              realized she had already been doing a combination of both passions for years.
            </p>
            <br>
            <p>
              Heroshe was founded with a desire to serve people. Since opening our doors in 2012, Heroshe has been
              connecting Nigerians with quality US products they deserve at shipping prices they can afford.
            </p>
          </div>
          <div class="stats grid">
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  139
                </p>
                <p class="comment center-align">
                  SCREENS
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  9.6k
                </p>
                <p class="comment center-align">
                  HOURS SPENT
                </p>
              </div>
            </div>
            <div class="stat">
              <div class="content-box">
                <p class="amount">
                  4
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
            <div class="link grid">
              <div class="image-part flex">
                <img src="/svg/monitor.svg" alt="">
              </div>
              <a href="https://heroshe.com" target="_blank" class="flex">Visit Website</a>
            </div>
            <div class="link grid">
              <div class="image-part flex">
                <img src="/svg/pdf.svg" alt="">
              </div>
              <a href="https://docs.google.com/document/d/1a14-UmqCIrGM6QEOt0vGyg4B-lGwPcDWSSX7beES34g/edit?usp=sharing" target="_blank" class="flex">Download Case study</a>
            </div>
          </div>
        </div>
      </section>
      <div class="process grid equal-two full-mobile">
        <div class="content-box">
          <div class="challenge">
            <h2 class="title">
              The Challenge
            </h2>
            <p class="text">
              Heroshe build their initial MVP (minimum viable product) on Wordpress. Wordpress is the largest CMS on
              the market that powers up to 27% of website on the internet (Netcraft ) The flexibility of WordPress lets
              you turn your content, images, video and more into a functional website.
            </p>
            <br>
            <p class="text">
              As their business continue to grow, they kept on building Plugins upon Plugins (where you can download and
              “plug-in” third-party pieces
              of software to make your site look, act, and feel exactly the way you want) to suit their business needs.
              The problem with that is that too many plugins from different designers who did not interact together well
              made the site less effect and slow down their site.
            </p>
          </div>
          <div class="what-we-did">
            <h2 class="title">
              What we did
            </h2>
            <div class="content">
              <p>
                We build a Custom Enterprise Solution for their Shop for and Ship for me platform. With a custom
                website, there is no theme which allowed Heroshe to build a site around their customer journey by
                focusing the design and development on the narrative that their customers is most likely to follow.
              </p>
              <br>
              <p>
                Custom building Heroshe allowed us to completely avoid unnecessary functionality which reduce load
                time.
              </p>
            </div>
          </div>
        </div>
        <div class="image-part hide-on-small">
          <img src="/img/custom/Screenshot from 2019-06-23 14:20:39.png" alt="">
        </div>
      </div>
      <div class="gallery">
        <hslider />
        <div class="other-images grid equal-two">
          <div class="image">
            <img
              :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/v1561570127/fluidangle/img/xd/Rectangle_1521.png')"
              alt=""
            >
          </div>
          <div class="image">
            <img
              :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/v1561570127/fluidangle/img/xd/Rectangle_1522.png')"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials">
      <div class="image-part flex">
        <img src="https://heroshe.com/wp-content/themes/heroshewp4/images/why_we_do_what3.jpg" alt="">
      </div>
      <div class="content-box flex dir-column">
        <p class="title center-align">
          Osinachi Ukomadu &amp; Chichi Ukomadu
        </p>
        <div class="container text-container">
          <p class="text center-align">
            It was a wonderful experience working with the fluidangle team. When we started, I had doubts whether the
            team would understand the scope and complexity of our project. Our initial conversations started building my
            confidence. After much thought and research on the team; seeing their pedigree and accomplishments, I decided to
            move forward. I was impressed by the depth of knowledge and expertise exhibited on the project. The final
            output exceeded my expectations. The team was very flexible and responsive to our needs. I was so impressed
            that I continued working with some of the talents in the next phase of the project.
          </p>
        </div>
        <p class="role">
          Co-Founder & CEO, Osi Ukomadu
        </p>
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
            <div v-for="(technology, index) in technologies" :key="index" class="technology">
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
            <div v-for="(integration, index) in integrations" :key="index" class="integration">
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
      :left-menu="{title:'Oinder',url:'/projects/oinder'}"
      :right-menu="{image:'/img/LOGO text_colored.png',url:'/projects/plinkd'}"
    />
    <start-project />
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Heroshe',
  head() {
    return {
      title: 'Fluidangle --Heroshe',
      meta: [
        { hid: 'description', name: 'description', content: 'Heroshe Work By Fluidangle' }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
    // CheckboxBlankCircle: () => ({ component: import('vue-material-design-icons/CheckboxBlankCircle.vue') }),
    shortcutMenus: () => ({ component: import('~/components/shortCutMenus.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') }),
    hslider: () => ({ component: import('~/components/heroshe-slider.vue') })
  },
  data: () => ({
    technologies: [
      {
        text: '',
        image: '/img/Image 39.png'
      },
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563192367/fluidangle/svg/nuxtjs-typo.svg'
      },
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563194028/fluidangle/svg/python-3.svg'
      },
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563192014/fluidangle/svg/djangoproject-ar21.svg'
      }
    ],
    integrations: [
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563192756/fluidangle/svg/stripe-ar21.svg'
      },
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563192749/fluidangle/svg/mailgun-ar21.svg'
      },
      {
        text: '',
        image: 'https://res.cloudinary.com/nazarick/image/upload/v1563194036/fluidangle/svg/amazon-web-services.svg'
      }
    ]
  }),
  mounted() {
  },
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
          color: #47b6d2;
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
            width: 30%;
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
            font-size: 1rem;
          }
        }
      }

      .process {
        .content-box {
          width: 85%;

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

          .image-part {
            img {
              object-fit: cover;
              object-position: center;
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

      .gallery {
        margin-top: 5rem;
        margin-bottom: 5rem;
        .other-images {
          /*height: 20rem;*/
          .image {
            height: 60%;

            img {
              object-fit: fill;
            }
          }
        }

        .image {
          img {
            object-position: center;
          }
        }
      }

      .other-features {
        margin-top: 5rem;

        .title {
          color: $gray;
          font: {
            weight: 500;
            size: 1.5rem;
          }
          margin: {
            bottom: 2rem;
          }
        }

        .text {
          font-size: 1rem;
          line-height: 1.39;
          margin-bottom: 5rem;
        }

        .image-part {
          justify-content: center;

          img {
            width: 60%;
          }
        }
      }
    }

    .testimonials {
      padding-bottom: 5rem;
      margin-top: 5rem;

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

        .text-container {
          margin-bottom: 2rem;
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
            right: 1.5rem;
            left: 1.5rem;
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
        @include breakpoint($max: 768px) {
          padding: {
            right: 1.5rem;
            left: 1.5rem;
          }
        }
        .integrations-grid {
          flex-wrap: wrap;
        }

        .integration {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
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
