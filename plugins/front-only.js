import Vue from 'vue'
import Ripple from 'vue-ripple-directive'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.use(ScrollFixedHeader)
Vue.directive('ripple', Ripple)
