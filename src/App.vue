<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
