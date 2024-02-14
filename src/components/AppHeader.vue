<script setup>
import PlatoIcon from './icons/PlatoIcon.vue';
// import { RouterLink } from 'vue-router';
defineProps({
    msg: {
        type: String,
        required: true
    }
})
const credits = 'Created by Tim Williams';
</script>

<template>
    <div class="border-b-6 border-black py-6 mx-1 md:mx-8">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div class="flex flex-col sm:flex-row items-center space-x-4">
                <PlatoIcon />
                <h1 class="text-2xl font-bold py-2">{{ msg }}</h1>
            </div>
            <h3 class="text-sm text-white text-right bg-blue-600 p-2">
                {{ credits }}
            </h3>
        </div>
    </div>
</template>