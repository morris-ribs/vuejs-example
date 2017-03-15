<template>
  <div>
    <h2>Disc List</h2>
      <div class="post">
        <div v-if="albums" class="content">
           <ul>
              <li v-for="item in albums">
                {{ item.title }} - {{ item.artist }} ({{ item.year }})
              </li>
          </ul>
        </div>
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
