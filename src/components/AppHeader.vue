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
            Logo
        </div>

        <div class="search-box">
            <!-- @keyup="$emit('performSearch')" -->
            <input type="search" v-model="store.config.params.query">
            <button @click="$emit('performSearch')">Search</button>
        </div>
    </header>
</template>

<style>
header {
    padding-top: 2rem;
    text-align: center;
}

input {}

button {
    background-color: red;
    color: white;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    padding: 1rem;
    border: none;
}
</style>
