<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="grid equal-two-rows content">
          <div class="header">
            <h1>
              WHO WE ARE
            </h1>
            <p>
              We are always initiative and responsive
            </p>
          </div>
          <div class="about-text">
            <p>
              We are doers. Our team of developers, designers, and devops engineers aims to see your ideas fly.
              Our products can get a new venture up and running or boost your existing business with great uptime.
            </p>
            <p>
              Your brand matters to us! Trust FluidAngle to show your customers
              your company’s best angle as we develop your custom product in line with your marketing.
            </p>
            <p>
              Your success is our success. We’re committed to bringing you a product that will satisfy you and your customers.
            </p>
          </div>
        </div>
        <div class="image-part">
          <img src="/svg/vector1.svg" alt="Who We Are">
        </div>
      </div>
    </div>
    <section class="section what-we-do container">
      <h2>What We Do</h2>
      <div class="options">
        <ul class="flex dir-row">
          <li class="option selected">
            Web Development
          </li>
          <li class="option">
            Mobile App
          </li>
          <li class="option">
            UI/UX Design
          </li>
        </ul>
      </div>
      <div class="options-container">
        <div class="web-development grid equal-two option-box">
          <div class="image-part">
            <img src="/img/custom/Screenshot from 2019-06-20 00:54:27.png" alt="">
          </div>
          <div class="content-box">
            <div class="title-box">
              <p class="title">
                Web Development
              </p>
              <small class="description">
                We trust that making client driven encounters
                In light of UI/UX best practices. Branding, and
                Product Design is the most idea approach to
                Accomplish result
              </small>
            </div>
            <ul>
              <li><span />Frontend</li>
              <li><span />Backend</li>
              <li><span />API / Deployment</li>
            </ul>
            <a>View Our Works</a>
          </div>
        </div>
        <div class="mobile-app grid equal-two option-box">
          <div class="content-box">
            <div class="title-box">
              <p class="title">
                Mobile App Development
              </p>
              <small class="description">
                We trust that making client driven encounters
                In light of UI/UX best practices. Branding, and
                Product Design is the most idea approach to
                Accomplish result
              </small>
            </div>
            <ul>
              <li><span />Android</li>
              <li><span />IOS</li>
              <li><span />Cross Platforms</li>
            </ul>
            <a>View Our Works</a>
          </div>
          <div class="image-part">
            <img src="/img/custom/Screenshot from 2019-06-20 00:30:56.png" alt="">
          </div>
        </div>
        <div class="ui-ux grid equal-two option-box">
          <div class="image-part">
            <img src="/img/custom/Screenshot from 2019-06-20 00:56:12.png" alt="">
          </div>
          <div class="content-box">
            <div class="title-box">
              <p class="title">
                UI UX Design
              </p>
              <small class="description">
                We trust that making client driven encounters
                In light of UI/UX best practices. Branding, and
                Product Design is the most idea approach to
                Accomplish result
              </small>
            </div>
            <ul>
              <li><span />UX Research</li>
              <li><span />Wireframe (LoFi Design) </li>
              <li><span />Mockup (HiFi Design) & Prototyping</li>
            </ul>
            <a>View Our Works</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section shortcuts">
      <div class="grid equal-two shortcut">
        <div class="shortcut-content">
          <p class="title">
            CASE STUDY
          </p>
          <a class="action-word">VIEW OUR WORKS <span>></span></a>
        </div>
        <div class="shortcut-content">
          <p class="title">
            CONTACT US
          </p>
          <a class="action-word">HAVE A PROJECT <span>></span></a>
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
  name: 'About',
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
      min-height: 100vh;
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
          left:10vw;
          top:2rem;
        };
        overflow-x: hidden;
        display: grid;
        grid-template-columns: 1.8fr 2fr;
        @include for-phone-only{
          grid-template-columns: 1fr;
        }
        .content{
          grid-template-rows: 1.5fr 1fr;
          grid-gap: 1rem;
        }
        .image-part{
          img{
            height: 35rem;
          }
        }
      }
      .header {
        text-transform: capitalize;
        color: white;
        padding-top: 1.5rem;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.7rem;
          line-height: 2;
        }

      }
      .about-text{
        p{
          font-size:.75rem;
          margin:{
            bottom:.5rem;
          }
        }
      }
    }
    .what-we-do{
      margin:{top: 3rem;}
      h2{
        font-size: 2.7rem;
        margin-bottom: 1rem;
      }
      .options{
        li{
          padding: {
            top:2.5%;
            right:2%;
            bottom: 1%;
          };
          margin:{
            bottom: 5%;
            right: 5%;
          }
          &.selected{
            font-weight: 700;
            border:{
              bottom: solid 3px $primary;
            }
          }
        }
      }
      .options-container{
        .option-box{
          margin:{ bottom: 5%;}
        }
        .title-box{
          width: 80%;
          .title{
            font: {
              weight: 700;
              size:1.2rem
            };
          }
          .description{
            font-size: .75rem;
            color: $dark-gray;
            max-height: 7rem;
          }
        }
        .content-box{
          width: 70%;
          margin:{
           top: 0;
            left: auto;
            right: 0;
          }
          ul{
            margin:{
              bottom:2rem;
            }
          }
          li{
            display:flex;
            align-items: center;
            font-size: 1rem;
            color:$primary;
            margin: {
              top:1.05rem;
            };
            span{
              width: 1.2rem;
              background-color: $primary;
              height: 0.2rem;
              margin-right: 1rem;
            }
          }
          a{
            color:$light-gray;
          }
        }
      }
    }
    .shortcuts{
      height: 17rem;
      .shortcut{
        height: 100%;
        .shortcut-content{
          height: 100%;
          display: flex;
          flex-direction:column ;
          align-items: center;
          justify-content: center;
          background-color: rgba(#e3e8f1,.27);
        }
        .title{
          font-size:1.75rem;
        }
        .action-word{
          color:$light-gray;
          span{
            color: $accent;
            padding: 0 .6rem;
            border: solid 2px #707070;
            border-radius: 100%;
            margin-left: .6rem;
          }
        }
      }
    }
  }
</style>
