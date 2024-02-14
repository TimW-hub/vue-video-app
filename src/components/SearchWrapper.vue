<script setup>
import SearchBar from './SearchBar.vue';
import SearchResults from './SearchResults.vue';
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
<div class="mx-1 md:mx-8 my-10">
  <div class="flex flex-col space-y-8 items-center">
    <h2 class="text-4xl font-mono font-bold text-blue-600 drop-shadow-md">TMDB Search Component</h2>
    <SearchBar />
    <SearchResults />
  </div>
</div>
</template>