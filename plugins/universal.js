import Vue from 'vue'

// plugins
// import Multiselect from 'vue-multiselect'
// import Loading from 'vue-loading-overlay'
import VueSwal from 'vue-swal'
import 'vue-material-design-icons/styles.css'

// stylesheets
// import 'vue-multiselect/dist/vue-multiselect.min.css'
// import 'vue-loading-overlay/dist/vue-loading.css'

Vue.prototype.$eventBus = new Vue()

// usage/registration
// Vue.component('multiselect', Multiselect)
// Vue.component('loading', Loading)
Vue.use(VueSwal)
