<template>
  <div id="app">
    <img src="./assets/logo.png">
    <DiscList></DiscList>
    <router-view></router-view>
  </div>
</template>

<script>
import DiscList from './components/DiscList'
import store from './vuex/store'

export default {
  name: 'app',
  components: {
    DiscList
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
   // this.fetchData()
  },
  store: store // make this and all child components aware of the new store
  /* methods: {
    ...mapActions({
      fetch: 'fetchAlbums' // map this.fetch() to this.$store.dispatch('fetchAlbums')
    })
  } */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
