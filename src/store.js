import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    movies: null,
    original_language: null,
    original_title: null,
    overview: null,
    poster_path: null,
    title: null,
    vote_average: null,
    errorMessage: null,
    // API_url: 'https://api.themoviedb.org/3/search/movie?api_key=e14460b68e70bbc26e66a03289f00772&query=thor',

    config: {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'e14460b68e70bbc26e66a03289f00772',
            query: '',
        }
    },
    results: null,
    error: false,
    callApi() {
        axios
            .get(store.config)
            .then(response => {
                console.log(response);
                // this.store.movies = response.data.results;
                store.results = response.data;
                store.loading = false;
                store.config.params.query = ''
            })
            .catch(err => {
                console.log(err);
                store.errorMessage = err.message
                store.error = err.message
            })
    },



})