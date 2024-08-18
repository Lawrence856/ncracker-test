<script setup>
  import { useRoute } from 'vue-router'
  import { computed, onMounted, ref } from 'vue'
  import { useStore } from 'vuex'
  import MovieCard from '@/components/Movies/MovieCard.vue'
  import MoviesLayout from '@/components/Movies/MoviesLayout.vue'
  import MoviesHead from '@/components/Movies/MoviesHead.vue'
  import NotFound from '@/components/ui/NotFound.vue'
  import Loader from '@/components/ui/Loader.vue'

  const route = useRoute()
  const store = useStore()

  const loading = ref(false)

  const movies = computed(() => store.getters['movies/GET_MOVIES'])
  const movie = computed(() => store.getters['movies/GET_MOVIE'])

  onMounted(async () => {
    loading.value = true

    if (movies.value.length) {
      await store.dispatch('movies/setMovieById', route.params.id)
    } else {
      await store.dispatch('movies/fetchMovieById', route.params.id)
    }

    loading.value = false
  })
</script>

<template>
  <MoviesLayout>
    <MoviesHead :is-detail="true" />
    <Loader v-if="loading" />
    <template v-else>
      <MovieCard
        v-if="movie"

        :id="movie.id"
        :collapse="movie.collapse"
        :poster="movie.poster"
        :title="movie.title"
        :year="movie.year"
        :genres="movie.genres"
        :directors="movie.directors"
        :actors="movie.actors"
        :descr="movie.description"
        :is-detail="true"
      />
      <NotFound v-else />
    </template>
  </MoviesLayout>
</template>