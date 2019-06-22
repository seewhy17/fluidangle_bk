<template>
  <div class="menus container">
    <div class="wrapper grid">
      <div class="left-menu">
        <div class="wrapper flex dir-row">
          <chevron-left class="menu-icon menu-left-icon icon-size" fill-color="#8d8d8d" />
          <p>{{ leftMenu.title }}</p>
          <img v-if="leftMenu.image !== null || leftMenu.image !== '' " :src="leftMenu.image" alt="">
        </div>
      </div>
      <div class="menu-grid">
        <div class="wrapper">
          <view-grid class="menu-icon menu-grid-icon" fill-color="#e3e8f1" />
        </div>
      </div>
      <div class="right-menu">
        <div class="wrapper flex dir-row">
          <p>{{ rightMenu.title }}</p>
          <img v-if="rightMenu.image !== null || rightMenu.image !== '' " :src="rightMenu.image" alt="">
          <chevron-right class="menu-icon menu-right-icon" fill-color="#8d8d8d" />
        </div>
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
          image: ''
        }
      }
    },
    rightMenu: {
      type: Object,
      default: function () {
        return {
          title: '',
          image: ''
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
      }
      .menu-icon{
        font-size: 4rem;
      }
      .left-menu{
        p{
          font-size: 3rem;
          font-weight: 600;
        }
      }
      .right-menu{
        img{
          width: 30%;
        }
      }
    }
  }
</style>
