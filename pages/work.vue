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
            <span>Feature</span> Work
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
        </ul>
      </div>
      <div class="projects-grid container grid equal-two">
        <div v-for="work in filteredWorks" :key="work.id" class="project" :class="work.id" :style="{backgroundColor:work.color}">
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
  head() {
    return {
      title: 'Our Works',
      meta: [
        { hid: 'description', name: 'description', content: 'Fluidangle Projects' }
      ]
    }
  },
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
        img: '/img/heroshe.png',
        action: '/projects/heroshe',
        type: 'web',
        color: '#47b6d2'
      },
      {
        id: 'plinkd',
        title: '',
        titleImage: '/img/LOGO text.png',
        text: 'One Location Connecting Friends mobile app',
        img: '/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png',
        action: '/projects/plinkd',
        type: 'mobile',
        color: '#f9872b'
      },
      {
        id: 'treeapp',
        title: 'Tree',
        titleImage: '',
        text: 'We ship from any US Online Store',
        img: 'https://res.cloudinary.com/nazarick/image/upload/v1562273978/fluidangle/img/xd/Image_65.png',
        action: '/projects/treeapp',
        type: 'mobile',
        color: '#6caa49'
      },
      {
        id: 'oinder',
        title: 'Oinder',
        titleImage: '',
        text: 'Making Living & Traveling More Affordable for Everyone',
        img: 'https://res.cloudinary.com/nazarick/image/upload/v1562445160/fluidangle/img/xd/Image_71.png',
        action: '/projects/oinder',
        type: 'mobile',
        color: '#877afb'
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
        background: {
          color: $primary;
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
          font-size: 1.2rem;
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
          font-size: 2rem;
          line-height: 1.45;
          font-weight: 700;
          color: $primary
        }
      }
    }

    .projects {
      margin-top: 8rem;
      .filter-options {
        @include breakpoint($min:1024px){
        width: 50%;
        min-width: 50%;
        }
        ul{
          padding: 0;
        }
        li {
          width: 20%;
          list-style-type: none;
          &:last-child{
            width: 40%;
          }
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
        overflow: hidden;
        @include breakpoint ($max: 992px) {
          grid-template-columns: 1fr;
        }

        .project {
          height: 17rem;
          background-color: $gray;
          margin-bottom: 3rem;
          position: relative;
          @include for-phone-only{
            height: 100vmin;
            margin: {
              top: 24rem;
            };
            &.heroshe{
              margin: {
                top:16rem;
              };
            }
            &>.grid{
              grid-template-columns: auto;
              .image-part{
                padding: 0;
                top: -60%;
                z-index: -1;
                img{
                  position: relative;
                  width: 100%;
                  top:0
                }
              }
              .content{
                position: absolute;
                justify-items: center;
                width: 100%;
                padding: 0;
                .content-box{
                  text-align: center;
                  padding: {
                    left:1rem;
                    right:1rem;
                  };
                  .title{
                    font-size: 2.8rem;
                  }
                  .text{
                    font-size: 1.5rem;
                    width: 100%;
                  }
                  .action-word{
                    font-size: 1rem;
                  }
                }
              }
            }
            .cover{
              height: calc(100% - 25rem);
            }
          }

          &.heroshe {
            /*background-color: #47b6d2;*/
            .image-part{
              padding:{
                left:0.5rem;
              }
              img{
                width: 100%;
              }
            }
            .content{
              padding-left: 2rem;
            }
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
              top: -15%;
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
              font-size: 1rem;
              color:$light;
              font-weight: 600;
              width:80%;
              margin-top:1rem;
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
