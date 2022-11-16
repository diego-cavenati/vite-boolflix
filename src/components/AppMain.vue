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
    <ul>
        <li v-for="movie in store.movies">
            {{ movie.title }}
        </li>
    </ul>
</template>