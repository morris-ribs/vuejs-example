import Vue from 'vue'
import Vuex from 'vuex'
import discstore from '../api/discstore'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // When the app starts, albums is set to empty list
  albums: [{ title: 'test' }]
}

const mutations = {
  // A mutation receives the current state as the first argument
  // You can make any modifications you want inside this function
  fetchAlbums (state, list) {
    state = Object.assign({}, state, {albums: list.list})
  }
}

const getters = {
  getAlbums: state => state.albums
}

const actions = {
  fetchAlbums  ({ commit }) {
    discstore.fetchData(albums => commit('fetchAlbums', { list: albums }))
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
