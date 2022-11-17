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

    config: {
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/multi',
        params: {
            api_key: 'e14460b68e70bbc26e66a03289f00772',
            query: '',
        }
    },
    results: null,
    error: false,
    callApi() {
        axios(store.config)
            .then(response => {
                // this.store.movies = response.data.results;
                store.results = response.data;
                store.loading = false;
                store.config.params.query = '';

                console.log(response.data.results[0].original_language);
                response.data.results.forEach(element => {
                    console.log(element);
                    if (element.original_language != null) {
                        if (element.original_language == 'en') {
                            element.original_language = 'gb'
                        }
                        return element.original_language
                    }
                });
                console.log(element.original_language);




            })
            .catch(err => {
                console.log(err);
                store.errorMessage = err.message
                store.error = err.message
            })
    },




})