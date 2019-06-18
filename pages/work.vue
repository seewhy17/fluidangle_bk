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
            Over the years we have worked with many businesses in diverse industries. <br>
            We are proud of our portfolio and we believe you’ll love it too.
          </p>
        </div>
        <div class="project-amount container">
          <p class="flex dir-column">
            <span>23</span> Projects
          </p>
        </div>
      </div>
    </div>
    <section class="projects">
      <div class="filter-options container">
        <ul class="flex dir-row">
          <li><a class="selected bold" href="" @click.prevent>All</a></li>
          <li><a class="bold" href="" @click.prevent>WEB</a></li>
          <li><a class="bold" href="" @click.prevent>MOBILE</a></li>
          <li><a class="bold" href="" @click.prevent>OUR PRODUCTS</a></li>
        </ul>
      </div>
      <div class="projects-grid container grid equal-two">
        <div v-for="work in works" :key="work.id" class="project heroshe" :class="work.id">
          <div class="grid equal-two">
            <div class="image-part">
              <img
                :src="work.img"
                class=""
                alt=""
              >
            </div>
            <div class="content grid equal-two-rows">
              <div class="content-box">
                <p class="title">
                  <img v-if="work.title === ''" :src="work.titleImage" class="" :alt="work.title">
                  {{ work.title }}
                </p>
                <p class="text">
                  {{ work.text }}
                </p>
              </div>
              <div class="action-box">
                <span class="action-word bold">View case study</span>
              </div>
            </div>
          </div>
          <div class="cover" />
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
  name: 'Work',
  components: {
    NavBar,
    Footer,
    'Statistics': () => ({ component: import('~/components/statistics.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
  },
  data: () => ({
    works: [
      {
        id: 'heroshe',
        title: '',
        titleImage: '/svg/heroshe-colored_2.svg',
        text: 'We ship from any US Online Store',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '',
        type: 'web'
      },
      {
        id: 'plinkd',
        title: '',
        titleImage: '/img/LOGO text.png',
        text: 'One Location Connecting Friends mobile app',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '',
        type: 'mobile'
      },
      {
        id: 'prontocare',
        title: 'ProntoCare',
        titleImage: '',
        text: 'We ship from any US Online Store',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '',
        type: 'web'
      },
      {
        id: 'ponos',
        title: '',
        titleImage: '/img/Image 5.png',
        text: 'Making Living & Traveling \n More Affordable for Everyone',
        img: '/img/Image 4.png',
        action: '',
        type: 'mobile'
      }
    ]
  })
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
        height: 100%;
        z-index: -1;
      }

      .banner-grid {
        padding: 4rem 5vw 0;
        overflow-x: hidden;
      }

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;

        h1 {
          font-size: 4.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: .95rem;
          line-height: 2;
        }
      }

      .project-amount {
        color: $primary;
        margin: {
          top: 12rem;
        }

        p {
          font-size: 1.7rem;
          position: absolute;
          bottom: -15%;
          display: inline-flex;
          padding: 1.8rem 2rem;
          background: white;
          align-items: center;
          color: $gray;
          border: solid 1px $gray;
        }

        span {
          font-size: 3rem;
          font-weight: 500;
          color: $primary
        }
      }
    }

    .projects {
      margin-top: 8rem;

      .filter-options {
        width: 50%;
        min-width: 50%;

        li {
          width: 25%;
          list-style-type: none;
        }

        a {
          font-size: 1rem;
          padding: {
            bottom: .5rem;
          };
        }

        .selected {
          color: $primary;
          border-bottom: solid 2px $primary;
        }
      }

      .projects-grid {
        margin-top: 3rem;
        padding: {
          top: 5rem;
          bottom: 3rem;
        }
        grid-gap: 5em 1em;
        @include breakpoint ($max: 768px) {
          grid-template-columns: 1fr;
        }

        .project {
          height: 17rem;
          background-color: $gray;
          margin-bottom: 3rem;
          position: relative;

          &.heroshe {
            background-color: #47b6d2;
            img{
              width: 10rem;
            }
          }

          &.ponos {
            background-color: $gray;
            img{
              width: 9.83rem;
            }
          }

          &.plinkd {
            background-color: #f9872b;
            img{
              width:9.5rem;
            }
          }

          &.prontocare {
            background-color: #0254a3;
          }

          .equal-two {
            height: 100%;
          }

          .image-part {
            position: relative;
            padding: {
              left: 3rem;
            };

            img {
              width: 70%;
              position: absolute;
              top: -20%;
            }
          }

          .content-box {
            justify-content: space-between;
            padding-top: 3rem;

            .title {
              color:$light;
              font-weight: 700;
              font-size: 1.8rem;
            }

            .text {
              font-size: .8rem;
              color:$light;
              font-weight: 600;
            }
          }
          .action-word {
            display: flex;
            align-items: baseline;
            align-content: baseline;
            text-transform: uppercase;
            font-size: .8rem;
            margin-top: 1.5rem;
            color: $light;

            &:after {
              content: "\02192";
              font-size: 1.5rem;
              font-weight: 700;
            }
          }
        }

        .cover {
          height: 4rem;
          bottom: -4rem;
          position: absolute;
          width: 100%;
          background-color: #fff;
          /*top: 100%;*/
        }
      }
    }
  }
</style>
