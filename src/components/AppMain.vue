<script>
import { store } from '../store.js';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            ActiveIndex: 0,
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
        // is_a_flag(lang) {
        //     if (this.flags.includes(lang_code)) {
        //         return true
        //     }
        //     return false
        // },
        // generateFlag(lang_code) {
        //     return new URL(`../../assets/images/${lang_code}.srg`)
        // }
        voteAverage(i) {
            return this.numeroStelle = store.vote_average[i]
        },
        halfNumber(el) {
            if (isNaN(el)) {
                return 0;
            }
            return parseInt(el / 2)
        },
        emptyStar(element) {
            return 5 - element;
        }
    }
}
</script>

<template>

    <div class="showResults" v-if="store.results">

        <h2>Film</h2>
        <div class="movie" v-for="(movie, i) in store.results.results" v-show="store.type[i] == 'movie'">
            <div class="movieSearch">
                <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                <div class="infoMovie">
                    <div class="shade"></div>
                    <img class="language" :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                    <div class="description">
                        <div class="movieTitle" v-if="movie.title != movie.original_title">
                            {{ movie.title }}
                        </div>
                        <div class="originalTitle" v-else>
                            {{ movie.original_title }}
                        </div>
                        <div class="star">
                            <div class="full">
                                <font-awesome-icon icon="fa-solid fa-star"
                                    v-for="star in this.halfNumber(movie.vote_average)" />
                            </div>
                            <div class="empty">
                                <font-awesome-icon icon="fa-regular fa-star"
                                    v-for="emptyStar in this.emptyStar(this.halfNumber(movie.vote_average))" />
                            </div>
                        </div>
                        <div class="overview">
                            {{ movie.overview }}
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <h2>Serie TV</h2>
        <div class="tvShow" v-for="(movie, i) in store.results.results" v-show="store.type[i] == 'tv'">
            <div class="movieSearch">
                <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                <div class="infoMovie">
                    <div class="shade"></div>
                    <img class="language" :src="`https://countryflagsapi.com/png/${movie.original_language}`" alt="">
                    <div class="description">
                        <div class="movieTitle" v-if="movie.title != movie.original_title">
                            {{ movie.name }}
                        </div>
                        <div class="originalTitle" v-else>
                            {{ movie.original_name }}
                        </div>
                        <div class="star">
                            <div class="full">
                                <font-awesome-icon icon="fa-solid fa-star"
                                    v-for="star in this.halfNumber(movie.vote_average)" />
                            </div>
                            <div class="empty">
                                <font-awesome-icon icon="fa-regular fa-star"
                                    v-for="emptyStar in this.emptyStar(this.halfNumber(movie.vote_average))" />
                            </div>
                        </div>
                        <div class="overview">
                            {{ movie.overview }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>


<style lang="scss" scoped>
.showResults {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

h2 {
    text-align: left;
    display: block;
    width: 100%;
    font-size: 2.5rem;
    padding-bottom: 0.8rem;
    padding-top: 1rem;
}

.movie,
.tvShow {
    width: 20%;
    position: relative;
    // border: 2px solid red;
    align-content: center;
    justify-content: center;
    align-items: center;
    display: flex;

    &:hover .infoMovie {
        display: block;
    }

    .movieSearch {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.originalTitle {
    font-size: 1.3rem;
}

.poster {
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.star {
    display: flex;
}

.description {
    width: 100%;
    padding: 1.4rem;
}

.infoMovie {
    z-index: 999;
    display: none;
    opacity: 0;
    transition: opacity 0.3s linear 0.05s;

    &:hover {
        opacity: 1;
    }

    .shade {
        z-index: 99;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.7;

    }

    .language {
        z-index: 999;
        position: absolute;
        top: 0.6rem;
        right: 0.8rem;
        max-width: 10%;
    }

    .description {
        z-index: 999;
        position: absolute;
        bottom: 1rem;
        left: 0rem;
        color: white;

        .originalTitle,
        .movieTitle {
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            color: white;
        }
    }
}
</style>