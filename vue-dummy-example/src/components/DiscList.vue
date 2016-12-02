<template>
  <div>
    <h2>Disc List</h2>
      <div class="post">
        <div class="loading" v-if="loading">
          Loading...
        </div>

        <div v-if="error" class="error">

        </div>

        <div v-if="post" class="content">
           <ul  v-for="item in post">
              <li>
                {{ item.title }}
              </li>
              <li>
                {{ item.artist }}
              </li>
              <li>
                {{ item.year }}
              </li>
          </ul>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'discs',
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      this.$http.get('http://localhost:4000/', {headers: {'Access-Control-Allow-Origin': '*'}})
      .then((response) => {
        // success callback
        this.loading = false
        this.post = response.body
      }, (response) => {
        // error callback
      })
    }
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
