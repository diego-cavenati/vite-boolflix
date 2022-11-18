<script>
import { store } from '../store.js';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            hover: false,
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
        is_a_flag(lang) {
            if (this.flags.includes(lang_code)) {
                return true
            }
            return false
        },
        generateFlag(lang_code) {
            return new URL(`../../assets/images/${lang_code}.srg`)
        }
    }
}
</script>

<template>

    <div class="container-fluid showResults" v-if="store.results">

        <h2>Film</h2>
        <div class="movie" v-for="(movie, i) in store.results.results" @mouseover="hover = true"
            @mouseleave="hover = false" v-show="store.type[i] == 'movie'">

            <div class=" movieSearch">
                <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                <div class="infoMovie" v-if="hover">
                    <img class="language" :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                    <div class="movieTitle" v-if="movie.title != movie.original_title">
                        {{ movie.title }}
                    </div>
                    <div class="originalTitle" v-else>
                        {{ movie.original_title }}
                    </div>
                    <!-- <font-awesome-icon icon="fa-solid fa-star" v-for="star in store.vote_average" />
                    <font-awesome-icon icon="fa-regular fa-star" /> -->
                </div>
            </div>
        </div>
    </div>

    <h2>Serie TV</h2>
    <div class="tvShow" v-for="(movie, i) in store.results.results" @mouseover="hover = true"
        @mouseleave="hover = false" v-show="store.type[i] == 'tv'">

        <div class="tvShowSearch">
            <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
            <div class="infoMovie" v-if="hover">
                <img class="language" :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                {{ movie.name }}
                {{ movie.original_title }}
                <!-- <font-awesome-icon icon="fa-solid fa-star" v-for="star in store.vote_average" />
                <font-awesome-icon icon="fa-regular fa-star" /> -->
            </div>
        </div>

    </div>


</template>


<style lang="scss" scoped>
.showResults {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

h2 {
    text-align: left;
    display: block;
    width: 100%;
    font-size: 2.5rem;
    padding-bottom: 0.8rem;
}

.movie {
    width: 20%;
    position: relative;

    .movieSearch {
        .originalTitle {
            font-size: 1.3rem;
        }

        .poster {

            img {
                max-width: 100%;
                object-fit: cover;
            }
        }
    }
}

.tvShow {
    display: flex;
}

.infoMovie {
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 999;

    .language {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 10%;
    }
}
</style>