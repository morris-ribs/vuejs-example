import Vue from 'vue'

export default {
  fetchData (func) {
    let albums = []
    // get albums from the server
    Vue.http.get('http://localhost:4000/', {headers: {'Access-Control-Allow-Origin': '*'}})
    .then((response) => {
      // success callback
      albums = response.body
      func(albums)
    }, (response) => {
      // error callback
      console.log(response)
    })
  }
}
