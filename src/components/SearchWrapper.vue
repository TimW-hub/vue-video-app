<script setup>
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment';
import SearchIcon from './icons/SearchIcon.vue';
defineProps({
  msg: {
    type: String,
    required: false
  }
})

const searchTerm = ref('');
const results = ref(null);
const isLoading = ref(false);
const error = ref('');
const imagePath = 'https://image.tmdb.org/t/p/original/';

const searchAPI = async () => {
  isLoading.value = true;
  error.value = '';

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${searchTerm.value.replace(/\s+/g, '+')}&api_key=0e30077d666be7a6faab1f8d2177d527`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTMwMDc3ZDY2NmJlN2E2ZmFhYjFmOGQyMTc3ZDUyNyIsInN1YiI6IjY1Y2QxNTljNDU5YWQ2MDE3YzlmOWYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4f0oQ2D6knw8gYSAnR5VWAIWKhhk-vwzkaYMg9Oq_A4'
    }
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data.results);
      results.value = response.data.results;
    })
    .catch((err) => {
      console.error('Failed to fetch:', err);
      error.value = err.message || 'An error occurred while fetching the data.';
    }).finally(() => {
      isLoading.value = false;
    });
};

const formatDate = (date) => {
  if (date) {
    return moment(date).format('MMMM D, YYYY')
  }
  return 'No date listed.'
}
</script>

<template>
  <div class="mx-1 md:mx-8 my-10">
    <div class="flex flex-col space-y-8 items-center">
      <h2 class="text-4xl font-mono font-bold text-blue-600 drop-shadow-md">TMDB Search Component</h2>
      <!-- Search Bar -->
      <form @submit.prevent="searchAPI" class="relative">
        <input v-model="searchTerm" class="border border-gray-400 p-1 rounded drop-shadow z-0" type="text"
          placeholder="Search">
        <button type="submit" :disabled="isLoading"
          class="absolute right-0 top-0 bottom-0 p-1 z-10 w-8 flex justify-center items-center text-gray-400 hover:text-blue-700">
          <SearchIcon />
        </button>
      </form>

      <!-- Search Results -->
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="results">
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-16 sm:gap-y-8 gap-x-4">
          <li v-for="(result, index) in results" :key="index">
            <div class="flex flex-col">
              <div v-if="result.poster_path" class="aspect-h-3 aspect-w-2"><img class="w-full"
                  :src="imagePath + result.poster_path"></div>
              <div v-else class="aspect-h-3 aspect-w-2 bg-TMDB"><img class="object-contain"
                  src="@/assets/placeholder_image.png"></div>
              <h3 class="font-bold text-lg pt-3">
                {{ result.title }}
              </h3>
              <p class="text-gray-700 font-sm">
                {{ formatDate(result.release_date) }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>