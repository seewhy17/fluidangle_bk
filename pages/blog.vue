<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <div class="header">
            <h1>
              BLOG
            </h1>
            <p>
              Want to discuss your product or partnership?
            </p>
            <p>
              We’re always ready to help
            </p>
          </div>
          <div class="subscribe">
            <form action="" class="form">
              <div class="input-block">
                <input type="text" placeholder="Sign up for our weekly newsletter">
                <button class="subscribe">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <img src="/svg/xc.svg" alt="Who We Are">
      </div>
    </div>
    <section class="blog-container container">
      <div class="posts-container grid">
        <section class="post-main">
          <div class="post card main-post">
            <div class="image-part">
              <img :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_53.png')" alt="">
              <div class="content-box">
                <div class="content">
                  <h3 class="title">
                    The Rebellion Against China’s 996 Culture
                  </h3>
                  <p class="text">
                    Workers will no longer tolerate the punishing schedules of technology giants
                    Workers will no longer tolerate the punishing schedules.
                  </p>
                </div>
                <div class="action-box flex dir-row">
                  <a href="">Entrepreneur</a>
                  <p>7 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside>
          <div class="post card sub-post">
            <div class="image-part">
              <img :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/v1561570127/fluidangle/img/xd/Rectangle_1858.png')" alt="">
            </div>
            <div class="content-box">
              <div class="content">
                <h3 class="title">
                  The 3 Things Women Over 50
                  Can Do to Keep Their Jobs
                </h3>
                <p class="text">
                  Workers will no longer tolerate the punishing
                  schedules of technology giants Workers will
                  no longer tolerate the punishing schedules of
                  technology giants
                </p>
              </div>
              <div class="action-box flex dir-row list">
                <a href="">Development</a>
                <p>7 mins read</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="posts-container grid more-posts">
        <div class="wrapper">
          <div class="posts grid equal-two full-mobile">
            <div v-for="post in posts" :key="post.id" class="post">
              <div class="image-part">
                <img :src="post.image" alt="">
              </div>
              <div class="content-box">
                <div class="content">
                  <h3 class="title">
                    {{ post.title }}
                  </h3>
                  <p class="text">
                    {{ post.description }}
                  </p>
                </div>
                <div class="action-box flex dir-row">
                  <a href="">{{ post.type }}</a>
                  <p>{{ post.minutes }} mins read</p>
                </div>
              </div>
            </div>
          </div>
          <div class="most-popular">
            <div class="header">
              <h2 class="title">
                MOST POPULAR
              </h2>
            </div>
            <div class="wrapper">
              <div v-for="popular in mostPopular" :id="popular.key" :key="popular.key" class="content-box">
                <div class="content">
                  <h3 class="title">
                    {{ popular.title }}
                  </h3>
                  <p class="text">
                    {{ popular.description }}
                  </p>
                </div>
                <div class="action-box flex dir-row list">
                  <a href="">{{ popular.type }}</a>
                  <p>{{ popular.minutes }} mins read</p>
                </div>
              </div>
            </div>
          </div>
          <div class="wrapper trending">
            <div class="header">
              <h2 class="title">
                TRENDING
              </h2>
            </div>
            <div class="posts grid equal-two full-mobile">
              <div v-for="post in posts" :key="post.id" class="post">
                <div class="image-part">
                  <img :src="post.image" alt="">
                </div>
                <div class="content-box">
                  <div class="content">
                    <h3 class="title">
                      {{ post.title }}
                    </h3>
                    <p class="description">
                      {{ post.description }}
                    </p>
                  </div>
                  <div class="action-box flex dir-row">
                    <a href="">{{ post.type }}</a>
                    <p>{{ post.minutes }} mins read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <div class="whats-new card">
            <div class="whats-new-header">
              <p class="title">
                Whats New
              </p>
            </div>
            <div class="filter">
              <a href="" class="filter-options selected" @click.prevent="">Latest</a>
              <a href="" class="filter-options" @click.prevent="">Popular</a>
              <a href="" class="filter-options" @click.prevent="">Comment</a>
            </div>
            <div class="new-posts">
              <div v-for="newPost in whatsNew" :key="newPost.key" class="new-post flex dir-row">
                <div class="image-part flex">
                  <img :src="newPost.image" alt="">
                </div>
                <div class="content-box flex dir-column">
                  <p class="title">
                    {{ newPost.title }}
                  </p>
                  <small class="date">
                    {{ newPost.date }}
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="categories card">
            <p class="title">
              Categories
            </p>
            <div class="content-box">
              <ul>
                <li><a href="" @click.prevent>Entrepreneur</a></li>
                <li><a href="" @click.prevent>Design</a></li>
                <li><a href="" @click.prevent>Development</a></li>
                <li><a href="" @click.prevent>Innovation</a></li>
                <li><a href="" @click.prevent>Startup</a></li>
                <li><a href="" @click.prevent>Strategy</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  name: 'Blog',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    posts: [],
    mostPopular: [
      {
        id: 'popular-01',
        title: 'Want to Retire Rich? Don’t Make This Common Mistake.',
        type: 'Design',
        minutes: '6'
      },
      {
        id: 'popular-01',
        title: 'Want to Retire Rich? Don’t Make This Common Mistake.',
        type: 'Design',
        minutes: '6'
      }
    ],
    whatsNew: []
  }),
  mounted() {
    this.posts = [
      {
        id: 'post01',
        title: 'The 3 Things Women Over 50 Can Do to Keep Their Jobs',
        description: 'Workers will no longer tolerate the punishing schedules of technology giants Workers will no longer tolerate the punishing schedules of technology giants',
        type: 'Development',
        minutes: '7',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1744.png')
      },
      {
        id: 'post01',
        title: 'The 3 Things Women Over 50 Can Do to Keep Their Jobs',
        description: 'Workers will no longer tolerate the punishing schedules of technology giants Workers will no longer tolerate the punishing schedules of technology giants',
        type: 'Development',
        minutes: '7',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1745.png')
      }
    ]
    this.whatsNew = [
      {
        id: 'new-01',
        title: 'Lorem ipsum dolor',
        date: 'Feb 14 2019',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1850.png'),
        type: 'latest'
      },
      {
        id: 'new-02',
        title: 'Lorem ipsum dolor',
        date: 'Feb 14 2019',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1851.png'),
        type: 'latest'
      },
      {
        id: 'new-03',
        title: 'Lorem ipsum dolor',
        date: 'Feb 14 2019',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1852.png'),
        type: 'latest'
      },
      {
        id: 'new-04',
        title: 'Lorem ipsum dolor',
        date: 'Feb 14 2019',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1853.png'),
        type: 'latest'
      },
      {
        id: 'new-05',
        title: 'Lorem ipsum dolor',
        date: 'Feb 14 2019',
        image: this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_1854.png'),
        type: 'latest'
      }
    ]
  },
  methods: {
    getImageUrl(url) {
      return this.$cloudinary
        .url(url)
    },
    getImage(url, params) {
      // eslint-disable-next-line no-console
      console.log(params.width || 'auto')
      return this.$cloudinary
        .imageTag(url, {
          type: params.type || 'fetch',
          width: params.width || 'auto',
          height: params.height || 'auto',
          responsive: params.responsive || 'true',
          crop: params.crop || 'scale',
          responsive_placeholder: params.responsive_placeholder || 'blank',
          quality: params.quality || 'auto',
          fetch_format: params.fetch_format || 'auto',
          client_hints: params.client_hints || 'true'
        })
        .toHtml()
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
        height: 60%;
        z-index: -1;
      }

      .banner-grid {
        padding: {
          left: 10vw;
          right: 2rem;
          top: 2rem;
        };
        background: $primary;
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        @include for-phone-only {
          grid-template-columns: 1fr;
        }
      }

      .header {
        text-transform: capitalize;
        color: white;

        h1 {
          font-size: 3.5rem;
        }

        p {
          font-size: 1.4rem;
        }

      }

      .about-text {
        p {
          font-size: .75rem;
          margin: {
            bottom: .5rem;
          }
        }
      }

      .form {
        margin: {
          bottom: 1rem;
          top: 1rem;
        }

        .input-block {
          display: inline-flex;
          padding: {
            left: 3%;
            top: .2rem;
            bottom: .2rem;
            right: .5rem;
          };
          margin: {
            top: 1.5rem;
          };
          border-radius: 48px;
          border: solid 1px #707070;
          background-color: $light;
          font-size: .8rem;

          input {
            color: #9fb0bf;
            font-size: 1rem;
            line-height: 1.22;
            padding: 1rem 0;
            border: 0;
            text-overflow: ellipsis;
            @include for-phone-only {
              width: 100%;
              border-radius: 48px;
            }

            &:focus {
              outline: 0;
            }
          }

          button {
            border-radius: 48px;
            border: solid 1px #707070;
            color: $light;
            background-color: $primary;
            font-size: 1.75rem;
            padding: {
              top: .75rem;
              bottom: .65rem;
              left: 1.5rem;
              right: 1.45rem;
            };
            @include for-phone-only {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .blog-container {
      width: 85%;
      min-width: 85%;
      margin: {
        top: 7.25rem;
        right: 6%;
        left: 9%;
      }

      .card {
        border-radius: 20px;
        box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
        padding: {
          bottom: 2rem;
        };
      }

      .posts-container {
        grid-template-columns: 2fr 1fr;
        @include breakpoint($max: 768px) {
          grid-template-columns: auto;
        }
        grid-gap: 2.5rem;
        margin-bottom: 3rem;
      }

      .posts {
        margin-bottom: 10%;
      }

      .post {
        height: 100%;
        display: grid;
        align-content: space-between;

        .image-part {
          img {
            height: 25rem;
            object-position: top;
            object-fit: cover;
            width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
        }

        .content-box {
          padding: {
            left: 2.1rem;
            top: 3rem;
          };

          .content {
            margin-bottom: 3rem;
            width: 85%;

            h3 {
              line-height: 1.61;
              font-weight: 500;
              color: #3b3b3b;
              margin: {
                bottom: .5rem;
              }
            }

            p {
              color: #555555;
              line-height: 1.61;
            }
          }

          .action-box {
            color: $primary;
            align-items: center;

            a {
              padding-right: 1.5rem;
              border-right: solid 2px $deep-purple;
              margin-right: 1rem;
            }
          }
        }
      }

      .sub-post {
        border-radius: 12px;

        .image-part {
          img {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          }
        }

        .content-box {
          padding: {
            top: 1rem;
          };

          .content {
            margin-bottom: 1rem;
            width: 90%;

            h3 {
              line-height: 1.38;
              width: 90%;
              font: {
                size: 1rem;
                weight: normal;
              }
            }

            p {
              line-height: 1.38;
              font-size: .9rem;
            }
          }

          .action-box {
            align-items: center;

            a {
              border: {
                right: 0;
              };
              padding-right: 0;
            }
          }
        }
      }

      .more-posts {
        .posts {
          grid-gap: 2rem;
        }

        .post {
          align-content: space-evenly;

          .image-part {
            img {
              border-radius: 0;
              height: 18.75rem;
            }
          }

          .content-box {
            padding: {
              top: 1rem;
              left: 0;
            }

            .content {
              width: 100%;
            }

            h3 {
              font-weight: 500;
              width: 85%;
            }

            p {
              width: 80%;
              font-size: .9rem;
            }
          }
        }
      }

      .header {
        margin-bottom: 2rem;

        .title {
          color: $primary;
          font-weight: 500;
          line-height: 1.61;
          padding-bottom: .5rem;
          border-bottom: solid 2px $light-gray;
        }
      }

      .most-popular {
        .content-box {
          &:first-child {
            border-bottom: solid 2px $light-gray;
          }

          padding-bottom: 2rem;
          margin-bottom: 3rem;

          h3 {
            font-weight: 500;
            line-height: 1.61;
            color: $gray;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
        }

        .action-box {
          color: $gray;
          align-items: center;

          a {
            padding-right: 1rem;
            border-right: solid 2px $gray;
            margin-right: 1rem;
          }
        }
      }

      .trending {
        .title {
          padding-bottom: 1rem;
        }
      }

      .whats-new {
        margin-bottom: 2rem;
        padding: {
          top: 2.5rem;
          left: 2rem;
        }

        .whats-new-header {
          .title {
            color: $primary;
            font: {
              weight: 500;
              size: 1.5rem;
            }
          }

          margin: {
            bottom: 1rem;
          };
          line-height: 1.61;
        }

        .filter {
          margin-bottom: 1.5rem;
        }

        .filter-options {
          color: rgba(#464646, 0.45);
          line-height: 1.36;
          margin: {
            right: 1rem;
          };

          &.selected {
            font-weight: 700;
            line-height: 1.44;
            color: #464646;
          }
        }

        .new-posts {
          justify-content: center;

          .new-post {
            margin-bottom: 1rem;

            .image-part {
              width: 25%;
              margin: {
                right: 5%;
              };

              img {
                object-fit: cover;
                object-position: center;
                border-radius: 5px;
              }
            }

            .content-box {
              padding: .7rem 0
            }

            .title {
              line-height: 1.44;
              color: #1d1d1d;
              font-weight: 700;
            }

            .date {
              line-height: 1.38;
              color: rgba(#464646, .71);
            }
          }
        }
      }

      .categories {
        padding: {
          top: 2.5rem;
          left: 2rem;
          bottom: 5rem;
        }

        .title {
          font: {
            size: 1.5rem;
            weight: 500;
          }
          color: $gray;
          line-height: 1.61;
        }

        ul {
          padding: 0;
          margin-top: 1.5rem;

          li {
            padding: {
              top: .5rem;
              bottom: .5rem;
            }
            margin-bottom: .5rem;

            a {
              line-height: 1.39;
              color: $gray;
            }
          }
        }
      }
    }
  }
</style>
