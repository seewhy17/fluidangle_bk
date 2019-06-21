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
            <form action="">
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
              <img src="/img/custom/General (24).jpg" alt="">
            </div>
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
        </section>
        <aside>
          <div class="post card sub-post">
            <div class="image-part">
              <img src="/img/custom/General (19).jpg" alt="">
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
              <div class="action-box flex dir-row">
                <a href="">Development</a>
                <p>7 mins read</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="posts-container grid more-posts">
        <div class="wrapper">
          <div class="posts grid equal-two">
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
            <div v-for="popular in mostPopular" :key="popular.key" :id="popular.key" class="content-box">
              <div class="content">
                <h3 class="title">
                  {{ popular.title }}
                </h3>
                <p class="text">
                  {{ popular.description }}
                </p>
              </div>
              <div class="action-box flex dir-row">
                <a href="">{{ popular.type }}</a>
                <p>{{ popular.minutes }} mins read</p>
              </div>
            </div>
          </div>
          <div class="wrapper trending">
            <div class="header">
              <h2 class="title">
                TRENDING
              </h2>
            </div>
            <div class="posts grid equal-two">
              <div v-for="post in posts" :key="post.id" class="post">
                <div class="image-part">
                  <img :src="post.image" alt="">
                </div>
                <div class="content-box">
                  <div class="content">
                    <h3 class="title">
                      {{ post.title }}
                    </h3>
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
        <aside />
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
    posts: [
      {
        id: 'post01',
        title: 'The 3 Things Women Over 50 Can Do to Keep Their Jobs',
        description: 'Workers will no longer tolerate the punishing schedules of technology giants Workers will no longer tolerate the punishing schedules of technology giants',
        type: 'Development',
        minutes: '7',
        image: '/img/custom/General (19).jpg'
      },
      {
        id: 'post01',
        title: 'The 3 Things Women Over 50 Can Do to Keep Their Jobs',
        description: 'Workers will no longer tolerate the punishing schedules of technology giants Workers will no longer tolerate the punishing schedules of technology giants',
        type: 'Development',
        minutes: '7',
        image: '/img/custom/General (19).jpg'
      }
    ],
    mostPopular: [
      {
        id: 'popular-01',
        title: 'Want to Retire Rich? Don’t Make This Common Mistake.',
        type: 'Design',
        minutes: '6'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
  body{
    background-color: #fdfdfd;;
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
          font-size: 5.625rem;
        }

        p {
          font-size: 1.7rem;
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

      .input-block {
        display: inline-flex;
        padding: {
          left: 8%;
          top: .5rem;
          bottom: .5rem;
          right: 1.0625rem;
        };
        margin: {
          top: 1.5rem;
        };
        border-radius: 48px;
        border: solid 1px #707070;
        background-color: $light;
        font-size: .95rem;

        input {
          color: #9fb0bf;
          font-size: 1.28rem;
          line-height: 1.22;
          padding: 1.25rem 0;
          border: 0;

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
      .header{
        margin-bottom: 2rem;
        .title{
          color:$deep-purple;
          font-weight: 500;
          line-height: 1.61;
          padding-bottom: .5rem;
          border-bottom: solid 2px $light-gray;
        }
      }
      .most-popular{
        .content-box{
          h3{
            font-weight: 500;
            line-height: 1.61;
            color:$gray;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
        }
        .action-box{
            color: $gray;
          align-items: center;
            a {
              padding-right: 1.5rem;
              border-right: solid 2px $gray;
              margin-right: 1rem;
            }
        }
      }
    }
  }
</style>
