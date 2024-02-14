<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <header>
    <AppHeader msg="Job Application - Single-page Web App" />
  </header>

  <RouterView />
</template>
