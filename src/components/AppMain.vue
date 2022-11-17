<script>
import { store } from '../store.js';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <ul v-if="store.results">
        <!-- <li v-for="movie in store.movies"> -->
        <li v-for="movie in store.results.results">
            {{ movie.title }}
            {{ movie.original_title }}
            {{ movie.original_language }}
            {{ movie.vote_average }}

        </li>
    </ul>

</template>