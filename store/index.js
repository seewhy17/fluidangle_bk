import cookieparser from 'cookieparser'
import { persist, desist } from './utils'

export const state = () => ({
  client: {},
  posts: []
})

export const mutations = {
  addPost(state, post) {
    state.posts.push(post)
  },
  resetPosts(state) {
    state.posts = []
  },
  setClient(state, info) {
    state.client = info
    persist('client', state.client)
  },
  resetStore(state) {
    state.client = {}
    desist('client')
  }
}

export const getters = {
  getPosts: state => {
    return state.posts
  },
  getByPriority: (state) => (priority) => {
    return state.posts.filter(post => post.priority.toLowerCase === priority.toLowerCase)
  }
}

export const actions = {
  async emptyPosts({ commit }) {
    await commit('resetPosts')
  },
  async savePost({ commit }, post) {
    await commit('addPost', post)
  },
  nuxtServerInit({ commit }, { req }) {
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)

      const { client } = parsed

      if (client) {
        // TODO: if auth.token fetch user info and pouplate it in store
        commit('setClient', JSON.parse(client))
      }
    }
  }
}
