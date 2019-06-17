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
          <li><a class="selected bold" href="">All</a></li>
          <li><a class="bold" href="">WEB</a></li>
          <li><a class="bold" href="">MOBILE</a></li>
          <li><a class="bold" href="">OUR PRODUCTS</a></li>
        </ul>
      </div>
      <div class="projects-grid container flex dir-row">
        <div class="project heroshe">
          <div class="flex dir-row">
            <div class="image-part">
              <img
                src="/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png"
                srcset="img/Screenshot 2019-05-01 at 6.07.27 AM copy@2x.png 2x,
             /img/Screenshot 2019-05-01 at 6.07.27 AM copy@3x.png 3x"
                class=""
              alt="">
            </div>
            <div class="content">
              <div class="content-box">
                <p class="title">Heroshe</p>
                <p class="text">We ship from any US
                  Online Store</p>
              </div>
              <div class="action-box">
                <span class="action-word bold">View case study</span>
              </div>
            </div>
          </div>
        </div>
        <div class="project heroshe">
          <div class="flex dir-row">
            <div class="image-part">
              <img
                src="/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png"
                srcset="img/Screenshot 2019-05-01 at 6.07.27 AM copy@2x.png 2x,
             /img/Screenshot 2019-05-01 at 6.07.27 AM copy@3x.png 3x"
                class=""
                alt="">
            </div>
            <div class="content">
              <div class="content-box">
                <p class="title">Heroshe</p>
                <p class="text">We ship from any US
                  Online Store</p>
              </div>
              <div class="action-box">
                <span class="action-word bold">View case study</span>
              </div>
            </div>
          </div>
        </div>
        <div class="project heroshe">
          <div class="flex dir-row">
            <div class="image-part">
              <img
                src="/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png"
                srcset="img/Screenshot 2019-05-01 at 6.07.27 AM copy@2x.png 2x,
             /img/Screenshot 2019-05-01 at 6.07.27 AM copy@3x.png 3x"
                class=""
                alt="">
            </div>
            <div class="content">
              <div class="content-box">
                <p class="title">Heroshe</p>
                <p class="text">We ship from any US
                  Online Store</p>
              </div>
              <div class="action-box">
                <span class="action-word bold">View case study</span>
              </div>
            </div>
          </div>
        </div>
        <div class="project heroshe">
          <div class="flex dir-row">
            <div class="image-part">
              <img
                src="/img/Screenshot 2019-05-01 at 6.07.27 AM copy.png"
                srcset="img/Screenshot 2019-05-01 at 6.07.27 AM copy@2x.png 2x,
             /img/Screenshot 2019-05-01 at 6.07.27 AM copy@3x.png 3x"
                class=""
                alt="">
            </div>
            <div class="content">
              <div class="content-box">
                <p class="title">Heroshe</p>
                <p class="text">We ship from any US
                  Online Store</p>
              </div>
              <div class="action-box">
                <span class="action-word bold">View case study</span>
              </div>
            </div>
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
  name: 'Work',
  components: {
    NavBar,
    Footer,
    'Statistics': () => ({ component: import('~/components/statistics.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') })
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
      .project-amount{
        color: $primary;
        margin:{top:12rem;}
        p{
          font-size: 1.7rem;
          position: absolute;
          bottom: -15%;
          display: inline-flex;
          padding:1.8rem 2rem;
          background: white;
          align-items: center;
          color:$gray;
          border: solid 1px $gray;
        }
        span{
          font-size: 3rem;
          font-weight: 500;
          color:$primary
        }
      }
    }
    .projects{
      margin-top: 8rem;
      padding-bottom: 3rem;
      .filter-options{
        width: 50%;
        min-width: 50%;
        li{
          width: 25%;
          list-style-type: none;
        }
        a{
          font-size: 1rem;
          padding: {
            bottom: .5rem;
          };
        }
        .selected{
          color:$primary;
          border-bottom: solid 2px $primary;
        }
      }
      .projects-grid{
        margin-top: 3rem;
        .project{
          width: 50%;
        }
      }
    }
    }
</style>
