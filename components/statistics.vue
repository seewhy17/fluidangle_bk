<template>
  <section class="section our-statistics">
    <div class="container flex dir-row statistics-grid">
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-clients-b5bbbd87.png"
            srcset="/img/stats-clients-b5bbbd87@2x.png 2x,
             /img/stats-clients-b5bbbd87@3x.png 3x"
            alt="stats-clients"
          >
        </div>
        <div class="content">
          <p class="amount">
            60+
          </p>
          <p class="comment">
            HAPPY CLIENTS
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-commits-5a037d2c.png"
            srcset="/img/stats-commits-5a037d2c@2x.png 2x,
             /img/stats-commits-5a037d2c@3x.png 3x"
            alt="stats-commits"
          >
        </div>
        <div class="content">
          <p class="amount">
            90+
          </p>
          <p class="comment">
            SUCCESSFUL PROJECT
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-projects-efbd5c8b.png"
            srcset="/img/stats-projects-efbd5c8b@2x.png 2x,
             /img/stats-projects-efbd5c8b@3x.png 3x"
            alt="stats-projects"
          >
        </div>
        <div class="content">
          <p class="amount">
            63+
          </p>
          <p class="comment">
            ACCEPTED USER STORIES
          </p>
        </div>
      </div>
      <div class="stats grid equal-two-rows">
        <div class="image-part">
          <img
            src="/img/stats-user-stories-a8e2c535.png"
            srcset="/img/stats-user-stories-a8e2c535@2x.png 2x,
             /img/stats-user-stories-a8e2c535@3x.png 3x"
            alt="stats-user-stories"
          >
        </div>
        <div class="content">
          <p class="amount">
            339+
          </p>
          <p class="comment">
            DELIVERED GIT COMMITS
          </p>
        </div>
      </div>
    </div>
    <div class="container grid works-grid">
      <div>
        <p class="content-text">
          People that trust our work
        </p>
      </div>
      <div>
        <img src="/svg/heroshe-colored.svg" class="partner-logo" alt="heroshe">
      </div>
      <div>
        <img
          src="/img/Screenshot 2019-05-01 at 6.25.48 AM.png"
          srcset="/img/Screenshot 2019-05-01 at 6.25.48 AM.@2x.png 2x,
             /img/Screenshot 2019-05-01 at 6.25.48 AM.@3x.png 3x"
          alt="proto"
        >
      </div>
      <div>
        <img
          src="/img/Image 7.png"
          srcset="/img/Image 7@2x.png 2x,
             /img/Image 7@3x.png 3x"
          alt="ponos"
        >
      </div>
    </div>
    <div class="clients container" />
  </section>
</template>

<script>
export default {
  name: 'Statistics'
}
</script>

<style scoped lang="scss">
  .our-statistics {
    margin-top: 5rem;
    padding-bottom: 3rem;

  .statistics-grid {
    min-width: 65%;
    width: 65%;
    align-items: center;
  }

  .stats {
    width: 25%;
    justify-items: center;
    text-align: center;
    margin-bottom: 5%;
    @include for-phone-only{
      width: 100%;
      border-left:0;
      border-bottom: solid 2px $light-purple;
    }

  &:nth-child(n+2) {
    @include for-tablet-portrait-up{
     border-left: solid 2px $light-purple;
    }
   }

  .amount {
    font-size: 3.2rem;
    font-weight: 600;
    color: $dark-grey;
  }

  .comment {
    font-size: .8rem;
    color: $light-gray;
    font-weight: 600;
  }
  }

  .works-grid {
  margin: {
    top: 5rem;
  }
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  .content-text {
    font-size: 1rem;
  }
  }

  .clients {
    min-width: 65%;
    width: 65%;
  }
  }
</style>
