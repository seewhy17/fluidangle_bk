<template>
  <div class="page">
    <div class="banner">
      <div class="bg" :style="getUrlMap()">
        <div class="banner-grid container flex dir-column">
          <h2 class="title">
            The Rebellion Against China’s 996 Culture
          </h2>
          <div class="content flex dir-row list">
            <span class="type">Entrepreneur</span> <span class="duration">7 mins read</span>
          </div>
        </div>
      </div>
      <nav-bar />
    </div>
    <div class="section container post">
      <p>
        Major tech events go, Google I/O lacks the glamour of an iPhone launch, the tension and drama of a
        Facebook keynote, or the cringe-inducing, over-the-top spectacle of a Samsung unveiling. The company’s announcements tend to be wonky,
        incremental, and heavily focused on artificial intelligence, especially its confusing inner workings.
      </p>
      <p>
        Yet I find Google’s annual developer conference the most consistently intriguing of
        the four, because the company isn’t just releasing nifty gadgets: It’s pushing the boundaries
        of what can be automated, down to the most quotidian tasks in our everyday lives.
      </p>
      <p>
        In the process, Google is giving us glimpses of a future that often looks more like sci-fi
        than we’re really prepared to grapple with — even as it tries to reassure us with privacy
        and security measures that often feel like attempts to paper over the can of worms it just opened.
      </p>
      <div class="image-part">
        <img :src="getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/Image_35.png')" alt="">
      </div>
      <p>
        Yet I find Google’s annual developer conference the most consistently intriguing of the four,
        because the company isn’t just releasing nifty gadgets: It’s pushing the boundaries of what can be automated,
        down to the most quotidian tasks in our everyday lives.
      </p>
      <p>
        In the process, Google is giving us glimpses of a future that often looks more like sci-fi than we’re really prepared
        to grapple with — even as it tries to reassure us with privacy and security measures that often feel like attempts to
        paper over the can of worms it just opened.
      </p>
      <div class="share flex dir-row list">
        <span>Share</span>
        <ul class="flex list dir-row">
          <li><a> <img src="/svg/facebook.svg" alt=""></a></li>
          <li><a> <img src="/svg/chat.svg" alt=""></a></li>
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
export default {
  name: 'Post01',
  components: {
    NavBar,
    Footer
  },
  methods: {
    getImageUrl(url) {
      return this.$cloudinary
        .url(url)
    },
    getUrlMap() {
      const url = this.getImageUrl('https://res.cloudinary.com/nazarick/image/upload/q_auto:good/v1561570109/fluidangle/img/xd/Rectangle_53.png')
      return { 'background-image': 'url("' + url + '")' }
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
