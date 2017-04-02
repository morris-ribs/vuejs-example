<template>
  <div id="app">
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
  store: store
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
