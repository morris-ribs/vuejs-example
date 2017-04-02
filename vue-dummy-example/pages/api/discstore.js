import axios from 'axios'

export default {
  fetchData (func) {
    let albums = []
    // get albums from the server
    setTimeout(() => axios.get('http://localhost:4000/', {headers: {'Access-Control-Allow-Origin': '*'}})
      .then((response) => {
        // success callback
        albums = response.data
        func(albums)
      }, (response) => {
        // error callback
        console.log(response)
      }),
    100)
  }
}
