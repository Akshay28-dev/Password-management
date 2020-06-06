const state = () =>({
  token: null,
  user: null,
  isUserLoggedIn: false
})

const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setToken (state, token) {
    state.token = token
    state.isUserLoggedIn = !!(token)
  }
}

const actions = {
  setUser ({commit}, user) {
    commit('setUser', user)
  },
  setToken({commit}, token){
    commit('setToken', token)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}