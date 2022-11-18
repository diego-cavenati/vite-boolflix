<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    emits: ['performSearch'],
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="">
        </div>

        <div class="search-box">
            <!-- @keyup="$emit('performSearch')" -->
            <input type="search" v-model="store.config.params.query" placeholder="cerca un film">
            <button @click="$emit('performSearch')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding-top: 2rem;
    text-align: center;
}

.logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 10%;
        text-align: center;
        margin: 0 auto;
    }
}

input {
    min-width: 20%;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
}

button {
    background-color: red;
    color: white;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    padding: 1rem;
    border: none;
}
</style>
