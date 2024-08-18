<script setup>
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex'
import MoviesList from '@/components/Movies/MoviesList.vue'
import MoviesLayout from '@/components/Movies/MoviesLayout.vue'
import MoviesHead from '@/components/Movies/MoviesHead.vue'
import { useSortMovies } from '@/composables/useSortMovies.js'
import Loader from '@/components/ui/Loader.vue'

const store = useStore()
const loading = ref(false)
const movies = computed(() => store.getters['movies/GET_MOVIES'])

const { sortedMovies, onSort } = useSortMovies(movies)

onMounted(async () => {
  loading.value = true

  await store.dispatch('movies/fetchMovies')

  loading.value = false
})

</script>

<template>
  <MoviesLayout>
    <MoviesHead @onSort="onSort" />
    <Loader v-if="loading" />
    <MoviesList v-else :movies="sortedMovies" />
  </MoviesLayout>
</template>


