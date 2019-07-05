<template>
  <div class="menus container">
    <div class="wrapper grid">
      <div class="left-menu">
        <nuxt-link :to="leftMenu.url" tag="div">
          <div class="wrapper flex dir-row list">
            <chevron-left class="menu-icon menu-left-icon icon-size" fill-color="#8d8d8d" />
            <p class="title">
              {{ leftMenu.title }}
            </p>
            <img v-if="leftMenu.image !== null || leftMenu.image !== '' " :src="leftMenu.image" alt="">
          </div>
        </nuxt-link>
      </div>
      <div class="menu-grid">
        <div class="wrapper">
          <nuxt-link to="/work" tag="div">
            <view-grid class="menu-icon menu-grid-icon" fill-color="#e3e8f1" />
          </nuxt-link>
        </div>
      </div>
      <div class="right-menu">
        <nuxt-link :to="rightMenu.url" tag="div">
          <div class="wrapper flex dir-row list">
            <p class="title">
              {{ rightMenu.title }}
            </p>
            <img v-if="rightMenu.image !== null || rightMenu.image !== '' " :src="rightMenu.image" alt="">
            <chevron-right class="menu-icon menu-right-icon" fill-color="#8d8d8d" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortCutMenus',
  components: {
    ChevronLeft: () => ({ component: import('vue-material-design-icons/ChevronLeft.vue') }),
    ViewGrid: () => ({ component: import('vue-material-design-icons/ViewGrid.vue') }),
    ChevronRight: () => ({ component: import('vue-material-design-icons/ChevronRight.vue') })
  },
  props: {
    leftMenu: {
      type: Object,
      default: function () {
        return {
          title: '',
          image: '',
          url: '/'
        }
      }
    },
    rightMenu: {
      type: Object,
      default: function () {
        return {
          title: '',
          image: '',
          url: '/'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .menus {
    .wrapper{
      grid-template-columns: 1fr auto 1fr;
      &>div{
        .wrapper{
          padding: {
            top:3rem;
            bottom: 3rem;
          };
        }
      }
      .left-menu,
      .right-menu{
        .wrapper{
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        img{
          cursor: pointer;
        }
      }
      .title{
        font-size: 3rem;
        cursor: pointer;
        @include breakpoint($max: 768px){
          font-size: 1rem;
        }
      }
      .menu-icon{
        font-size: 4rem;
        cursor: pointer;
        @include breakpoint($max: 768px){
          font-size: 1rem;
        }
      }
      .left-menu{
        p{
          font-weight: 600;
        }
      }
      .right-menu{
        img{
          max-width: 30%;
        }
      }
    }
  }
</style>
