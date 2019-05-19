import cookieparser from 'cookieparser'
import { persist, desist } from './utils'

export const state = () => ({
  client: {}
})

export const mutations = {
  setClient(state, info) {
    state.client = info
    persist('client', state.client)
  },
  resetStore(state) {
    state.client = {}
    desist('client')
  }
}

export const getters = {}

export const actions = {
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
