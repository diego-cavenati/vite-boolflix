<script>
import { store } from './store.js';
import axios from 'axios';
// import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
// import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  mounted() {
    this.callApi('https://api.themoviedb.org/3/search/movie?api_key=e14460b68e70bbc26e66a03289f00772&language=en-US&query=thor&page=1&include_adult=false')
  },
  // components: {
  //   AppHeader,
  //   AppMain,
  //   AppFooter,
  // },
}
</script>

<template>


  <!-- <AppHeader />
  <AppMain />
  <AppFooter /> -->

</template>

<style>

</style>
