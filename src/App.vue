<script>
import { store } from './store.js';
// import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
  // methods: {
  //   callApi() {
  //     axios
  //       .get(store.config)
  //       .then(response => {
  //         console.log(response);
  //         // this.store.movies = response.data.results;
  //         this.store.results = response.data;
  //         this.store.loading = false;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //         this.store.errorMessage = err.message
  //         this.store.error = err.message
  //       })
  //   }
  // },
  // mounted() {
  // const API_url = {
  //   method: 'get',
  //   url: 'https://api.themoviedb.org/3/search/movie',
  //   params: {
  //     api_key: 'e14460b68e70bbc26e66a03289f00772',
  //     language: 'en-US',
  //     query: 'Thor',
  //     page: '1',
  //     include_adult: "false",
  //   }
  // }
  //   this.callApi(this.store.API_url)

  // },

}
</script>

<template>

  <AppHeader @performSearch="store.callApi" />
  <AppMain />
  <AppFooter />

</template>

<style>

</style>
