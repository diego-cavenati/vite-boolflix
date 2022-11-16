import { reactive } from 'vue'

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
    API_url: 'https://api.themoviedb.org/3/search/movie?api_key=e14460b68e70bbc26e66a03289f00772&language=en-US&query=thor&page=1&include_adult=false',
})