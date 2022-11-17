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
    <div class="logo">
        Logo
    </div>

    <div class="search-box">
        <!-- @keyup="$emit('performSearch')" -->
        <input type="search" v-model="store.config.params.query">
        <button @click="$emit('performSearch')">Search</button>
    </div>
</template>

