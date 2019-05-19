import Vue from 'vue'

Vue.mixin({
  methods: {
    logout() {
      this.$router.push('/logout')
    }
  }
})
