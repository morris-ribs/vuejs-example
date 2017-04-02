<template>
  <div>
    <h2>Disc List</h2>
    <div v-if="albums.length > 0" class="content">
        <ul>
          <li v-for="item in albums">
            {{ item.title }} - {{ item.artist }} ({{ item.year }})
          </li>
      </ul>
    </div>
    <div v-if="albums.length == 0" class="content">
        <span>Browse the site to check our inventory!</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'discs',
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      albums: 'getAlbums'
    })
  },
  created () {
    console.log('created')
    this.$store.dispatch('fetchAlbums')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
