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
        <div class="project-amount">
          <p class="flex dir-column">
            <span>23</span> Projects
          </p>
        </div>
      </div>
    </div>
    <section class="projects">
      <div class="filter-options container">
        <ul class="flex dir-row list">
          <li><a class="" :class="{selected:isSelected('all')}" href="" @click.prevent="filterWorks('all')">ALL</a></li>
          <li><a class="" :class="{selected:isSelected('web')}" href="" @click.prevent="filterWorks('web')">WEB</a></li>
          <li><a class="" :class="{selected:isSelected('mobile')}" href="" @click.prevent="filterWorks('mobile')">MOBILE</a></li>
          <li><a class="" :class="{selected:isSelected('our products')}" href="" @click.prevent="filterWorks('our products')">OUR PRODUCTS</a></li>
        </ul>
      </div>
      <div class="projects-grid container grid equal-two">
        <div v-for="work in filteredWorks" :key="work.id" class="project" :class="work.id">
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
                <a :href="work.action"><span class="action-word bold">View case study</span></a>
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
    type: 'all',
    works: [
      {
        id: 'heroshe',
        title: '',
        titleImage: '/svg/heroshe-colored_2.svg',
        text: 'We ship from any US Online Store',
        img: '/img/Heroshe.png',
        action: '/projects/heroshe',
        type: 'web'
      },
      {
        id: 'plinkd',
        title: '',
        titleImage: '/img/LOGO text.png',
        text: 'One Location Connecting Friends mobile app',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '/projects/plinkd',
        type: 'mobile'
      },
      {
        id: 'prontocare',
        title: 'ProntoCare',
        titleImage: '',
        text: 'We ship from any US Online Store',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '/projects/prontocare',
        type: 'web'
      },
      {
        id: 'ponos',
        title: '',
        titleImage: '/img/Image 5.png',
        text: 'Making Living & Traveling \n More Affordable for Everyone',
        img: '/img/Image 4.png',
        action: '/projects/ponos',
        type: 'mobile'
      }
    ],
    filteredWorks: []
  }),
  mounted() {
    this.filteredWorks = this.works
  },
  methods: {
    filterWorks(type) {
      this.type = type
      this.filteredWorks = type === 'all' ? this.works : this.works.filter(work => work.type === type)
    },
    isSelected(type) {
      return this.type === type
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
        background: $primary;
        height: 100%;
        z-index: -1;
      }

      .banner-grid {
        padding: 0 5vw 0;
        overflow-x: hidden;
      }

      .content {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;
        margin: {
          left:0
        };

        h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: .95rem;
          font-weight: 500;
          line-height: 1.43;
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
          font-weight: 500;
          bottom: -15%;
          display: inline-flex;
          padding: 1.8rem 2rem;
          background: white;
          align-items: center;
          color: $gray;
          border: solid 1px $gray;
          text-transform: uppercase;
        }

        span {
          font-size: 3rem;
          line-height: 1.45;
          font-weight: 700;
          color: $primary
        }
      }
    }

    .projects {
      margin-top: 8rem;
      overflow-y: hidden;
      .filter-options {
        @include breakpoint($min:1024px){
        width: 50%;
        min-width: 50%;
        }
        li {
          width: 20%;
          list-style-type: none;
        }

        a {
          font:{
            size: 1rem;
            weight: 500;
          }
          padding: {
            bottom: .25rem;
          };
        }

        .selected {
          color: $primary;
          border-bottom: solid 4px $primary;
        }
      }

      .projects-grid {
        margin-top: 3rem;
        padding: {
          top: 5rem;
          bottom: 3rem;
        }
        grid-gap: 5em 1em;
        @include breakpoint ($max: 992px) {
          grid-template-columns: 1fr;
        }

        .project {
          height: 17rem;
          background-color: $gray;
          margin-bottom: 3rem;
          position: relative;

          &.heroshe {
            background-color: #47b6d2;
            .image-part{
              padding:{
                left:0.5rem;
              }
              img{
                width: 100%;
                top:-1rem;
              }
            }
            .content{
              padding-left: 2rem;
            }
          }

          &.ponos {
            background-color: $gray;
          }

          &.plinkd {
            background-color: #f9872b;
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
              img{
                width: 65%;
              }
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
          /*height: 45%;*/
          height:inherit;
          position: absolute;
          width: 100%;
          background-color: #fff;
          /*top: 100%;*/
        }
      }
    }
  }
</style>
