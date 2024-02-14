<script setup>
import SearchIcon from './icons/SearchIcon.vue';
defineProps({
    msg: {
        type: String,
        required: false
    }
})
</script>

<template>
    <form class="relative">
        <input class="border border-gray-400 p-1 rounded drop-shadow z-0" type="text" placeholder="Search">
        <button class="absolute right-0 top-0 bottom-0 p-1 z-10 w-8 flex justify-center items-center text-gray-400 hover:text-blue-700">
            <SearchIcon />
        </button>
    </form>
</template>