<script>
import { store } from '../store.js';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    methods: {
        // flag() {
        //     if (store.original_language != null) {
        //         if (store.original_language == 'en') {
        //             store.original_language = 'gb'
        //         }
        //         return store.original_language
        //     }
        // }
    }
}
</script>

<template>

    <ul v-if="store.results">
        <!-- <li v-for="movie in store.movies"> -->
        <li v-for="movie in store.results.results">
            <div class="movieSearch" v-if="movie.media_type == 'movie'">
                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                {{ movie.title }}
                {{ movie.original_title }}
                <img :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                {{ movie.vote_average }}
            </div>
            <div class="tvShow" v-else>
                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                {{ movie.name }}
                {{ movie.original_title }}
                <img :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                {{ movie.vote_average }}
            </div>
        </li>
    </ul>

</template>