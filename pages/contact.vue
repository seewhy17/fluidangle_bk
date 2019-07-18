<template>
  <div class="page">
    <div class="banner">
      <span class="bg" />
      <nav-bar />
      <div class="banner-grid">
        <div class="content">
          <div class="header">
            <h1>
              GET IN TOUCH
            </h1>
            <p>
              Want to discuss your product or partnership?
            </p>
            <p>
              We’re always ready to help
            </p>
          </div>
        </div>
        <img src="/img/Asset 1.png" alt="Who We Are">
      </div>
    </div>
    <section class="section contact-box container grid">
      <div class="contact-form-box">
        <p class="title">
          Drop us a message and
          get a response within 24 hours
        </p>
        <form action="" class="form">
          <div class="input-block flex dir-column">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="user.name"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
            >
          </div>
          <div class="input-block flex dir-column">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="user.email"
              type="email"
              placeholder="Enter Your Email Address"
              name="email"
              required
            >
          </div>
          <div class="input-block flex dir-column">
            <label for="telephone">Telephone</label>
            <input id="telephone" v-model="user.telephone" type="text" placeholder="Enter your telephone number" name="telephone">
          </div>
          <div class="grid equal-two project-budget">
            <div class="input-block flex dir-column">
              <label for="project">Project</label>
              <v-select id="project" v-model="user.project" placeholder="Select Project type" name="project" :options="projectOptions" />
            </div>
            <div class="input-block flex dir-column">
              <label for="budget">Budget</label>
              <v-select
                id="budget"
                v-model="user.budget"
                type="text"
                placeholder="Enter Your budget"
                name="budget"
                :options="budgetOptions"
                required
              />
            </div>
          </div>
          <div class="input-block flex dir-column">
            <label for="messages">Messages</label>
            <textarea id="messages" v-model="user.messages" placeholder="Description" name="description" style="resize: vertical" />
          </div>
          <button class="send-button" @click.prevent type="submit">
            Send Message
          </button>
        </form>
      </div>
      <div class="info-box">
        <div class="content-box">
          <p class="title">
            Our Headquarters
          </p>
          <p class="address">
            13 Rutland Square, Boston, MA 02118
          </p>
          <p class="email">
            contact@fluidangle.com
          </p>
          <p class="tel">
            Tel: <span><b>+1 (978) 849-4391</b></span>
          </p>
          <div class="social-media">
            <small>SOCIAL MEDIA</small>
            <div class="social-media">
              <a href="https://www.facebook.com/fluidangle/" title="facebook">
                <img
                  src="/img/facebook-logo-button.png"
                  alt="facebook"
                >
              </a>
              <a href="https://twitter.com/fluidangle" title="twitter">
                <img
                  src="/img/twitter.png"
                  alt="twitter"
                >
              </a>
              <a href="https://www.instagram.com/fluidangle/" title="instagram" target="_blank">
                <img
                  src="https://image.flaticon.com/icons/svg/1409/1409946.svg"
                  alt="instagram"
                  style="width: 39px;height:39px;"
                >
              </a>
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
import vSelect from 'vue-select'
import '~/assets/scss/vue-select.scss'

export default {
  name: 'ContactVue',
  head() {
    return {
      title: 'Contact Us',
      meta: [
        { hid: 'description', name: 'description', content: 'Contact Fluidangle' }
      ]
    }
  },
  components: {
    NavBar,
    Footer,
    'Statistics': () => ({ component: import('~/components/statistics.vue') }),
    'StartProject': () => ({ component: import('~/components/startProject.vue') }),
    'v-select': vSelect
  },
  data: () => ({
    projectOptions: [],
    budgetOptions: [],
    user: {
      name: '',
      email: '',
      project: [],
      budget: [],
      telephone: '',
      messages: ''
    }
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
        padding: {
          left: 10vw;
          right: 2rem;
          top:2rem;
        };
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
        padding-top: 10%;

        h1 {
          font-size: 3.1rem;
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
    }
    .contact-box{
      grid-template-columns: 1.5fr 1fr;
      align-items: start;
      @include breakpoint($max: 1024px){
        grid-template-columns: auto;
      }
      padding:{top: 5%};
      &>div{
        box-shadow: 0 3px 60px 0 #e3e8f1;
        border-radius: 13px;
      }
      .title{
        font:{
          size:1.75rem;
          weight: 500;
        }
        color: #542ea4;
      }
      .contact-form-box{
        padding: 5% 8%;
        .title{
          width: 80%;
        }
        .form{
          margin: {
            top:15%;
          };
          @include for-phone-only{
            .project-budget{
              grid-template-columns: auto;
            }
          }
          .input-block{
            padding: 2% 5%;
            border-radius: 6px;
            border: solid 1px #707070;
            margin:{
              bottom:5%;
            }
            label{
              font:{
                size:1rem;
                weight: 500;
              }
            }
            input[type="text"],
            input[type="email"],
            textarea{
              border:0;
              padding:{
                top:3%;
              }
            }
          }
          .send-button{
              min-height: 3.5rem;
              min-width: 11rem;
              margin: {
                top: 1.5rem;
              };
            cursor: pointer;
            padding: {
              top:1rem;
              left:2rem;
              right:4rem;
              bottom: 1rem;
            };
              border-style: none;
              border-radius: 5px;
              color: $light;
              background-color: $primary;
              font-size: 1.1rem;
              &:focus{
                outline: 0;
              }
          }
        }
      }
      .info-box{
        padding: 5% 10%;
        .content-box{
          width: 85%;
        }
        .title{
          margin:{
            bottom:5%;
          }
        }
        .address,
        .email,
        .tel{
          font-size:1.1rem;
          color: #3b3b3b;
        }
        .email{
          margin-bottom: .5rem;
        }
        .address{
          margin-bottom: 10%;
        }
        .tel{
          margin-bottom: 7%;
          color: #3b3b3b;
        }
        .social-media{
          small{
            color:$light-gray;
          }
          img{
            margin-right: 5%;
          }
        }
      }
    }
  }
</style>
