// import cookieparser from 'cookieparser'
import { persist, desist } from './utils'

export const state = () => ({
  client: {},
  posts: [],
  categories: [],
  mostPopular: [],
  pricing: {
    low: 0,
    high: 0
  },
  optionBlock: {
    platform: [],
    design: [],
    screen: [],
    signup_login: [],
    secure: [],
    generated_content: [],
    dates_and_locations: [],
    social_and_engagement: [],
    billing: [],
    types: [],
    external_api: []
  },
  user: {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    companyName: '',
    companyRole: '',
    lowEnd: 0,
    highEnd: 0
  }
})

export const mutations = {
  changePrice(state, pricing) {
    state.pricing = pricing
  },
  resetPrice(state) {
    state.pricing = {
      low: 0,
      high: 0
    }
  },
  changeUserForm(state, user) {
    state.user = user
  },
  resetUserForm(state) {
    state.user = {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      companyName: '',
      companyRole: '',
      lowEnd: 0,
      highEnd: 0
    }
  },
  changeOptions(state, optionBlock) {
    state.optionBlock = optionBlock
  },
  resetOptions(state) {
    state.optionBlock = {
      platform: [],
      design: [],
      screen: [],
      signup_login: [],
      secure: [],
      generated_content: [],
      dates_and_locations: [],
      social_and_engagement: [],
      billing: [],
      types: [],
      external_api: []
    }
  },
  addPost(state, post) {
    state.posts.push(post)
  },
  resetPosts(state) {
    state.posts = []
  },
  addCategory(state, category) {
    state.categories.push(category)
  },
  resetCategories(state) {
    state.categories = []
  },
  addMostPopular(state, popular) {
    state.mostPopular.push(popular)
  },
  resetMostPopular(state) {
    state.mostPopular = []
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
  getPrice: state => state.pricing,
  getOptions: state => state.optionBlock,
  getUserForm: state => state.user,
  getPosts: state => {
    return state.posts
  },
  getCategories: state => {
    return state.categories
  },
  getMostPopular: state => {
    return state.mostPopular
  },
  getByPriority: (state) => (priority) => {
    return state.posts.filter(post => post.priority.toLowerCase() === priority.toLowerCase())
  }
}

export const actions = {
  async emptyPosts({ commit }) {
    await commit('resetPosts')
  },
  async emptyCategories({ commit }) {
    await commit('resetCategories')
  },
  async emptyMostPopular({ commit }) {
    await commit('resetMostPopular')
  },
  async emptyPrice({ commit }) {
    await commit('resetPrice')
  },
  async emptyOptions({ commit }) {
    await commit('resetOptions')
  },
  async emptyUserForm({ commit }) {
    await commit('resetUserForm')
  },
  async savePost({ commit }, post) {
    await commit('addPost', post)
  },
  async saveCategory({ commit }, category) {
    await commit('addCategory', category)
  },
  async saveMostPopular({ commit }, popular) {
    await commit('addMostPopular', popular)
  },
  async saveOptions({ commit }, optionBlock) {
    await commit('changeOptions', optionBlock)
  },
  async savePrice({ commit }, pricing) {
    await commit('changePrice', pricing)
  },
  async saveUserForm({ commit }, user) {
    await commit('changeUserForm', user)
  }
  // nuxtServerInit({ commit }, { req }) {
  //   if (req.headers.cookie) {
  //     const parsed = cookieparser.parse(req.headers.cookie)
  //
  //     const { client } = parsed
  //
  //     if (client) {
  //       // TODO: if auth.token fetch user info and pouplate it in store
  //       commit('setClient', JSON.parse(client))
  //     }
  //   }
  // }
}
