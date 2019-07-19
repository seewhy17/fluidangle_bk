<template>
  <div class="page">
    <div class="banner">
      <div class="bg" :style="{backgroundImage: `url(${post.backgroundUrl})`}">
        <div class="banner-grid container flex dir-column">
          <h2 class="title">
            {{ post.title }}
          </h2>
          <div class="content flex dir-row list">
            <span class="type">{{ post.category.name }}</span> <span class="duration">{{ post.duration }} mins read</span>
          </div>
        </div>
      </div>
      <nav-bar />
    </div>
    <div class="section container post">
      <div v-html="post.paragraph"></div>
      <div class="share flex dir-row list">
        <span>Share</span>
        <ul class="flex list dir-row">
          <li><a> <img src="/svg/facebook.svg" alt=""></a></li>
          <li><a> <img src="https://image.flaticon.com/icons/svg/1409/1409946.svg" alt="" style="width:40px;height:40px"></a></li>
          <li><a> <img src="/svg/twitter.svg" alt=""></a></li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/partials/navBar.vue'
import Footer from '~/components/partials/Footer.vue'
import Strapi from 'strapi-sdk-javascript/build/main'
// import { mapGetters, mapActions } from 'vuex'

const apiUrl = 'https://fluidangle-blog-server.herokuapp.com'
const strapi = new Strapi(apiUrl)

export default {
  name: 'Post01',
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      post: {}
    }
  },
  async asyncData({ params }) {
    const id = params.id
    const post = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
        post(id: "${id}") {
            _id
            title
            summary
            paragraph
            category{
              name
            }
            backgroundUrl
            duration
            priority
          }
        }`
      }
    })
    // eslint-disable-next-line no-console
    console.log(post)
    return {
      post: post.data.post
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$route)
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
      height: 80vh;

      .bg {
        position: absolute;
        display: flex;
        align-items: flex-end;
        background-blend-mode: overlay;
        width: 100%;
        top: 0;
        left: 0;
        background: {
          color: rgba(#000,.29);
          repeat: no-repeat;
          position: center;
          size: cover;
        }
        height: 85%;
        z-index: -1;
      }

      .banner-grid {
        position: relative;
        padding: {
          right: 2rem;
          top: 2rem;
          bottom: 2rem;
        };
        /*overflow-x: hidden;*/
        color:$light;
        .content{
          margin: {
            top:1rem;
          };
        }
        .type{
          margin:{
            left: 2rem;
            right: 3rem;
          }
        }
      }
    }
    .post{
      p{
        color:$dark-gray;
        margin-bottom: 2rem;
      }
      .image-part{
        margin:{
          top: 1rem;
          bottom: 2rem;
        }
      }
      .share{
        &>span{
          color:#080808;
          font-size: 1.3rem;
          font-weight: 500;
        }
        margin: {
          top:5rem;
          bottom: 3rem;
        };
        align-items: center;
        justify-content: flex-end;
        li{
          margin:{
            left:1rem;
          }
        }
      }
    }
  }
</style>
