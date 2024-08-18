<script setup>
import MovieCard from '@/components/Movies/MovieCard.vue'
import { toRefs } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    default: () => ([])
  }
})

const { movies } = toRefs(props)

</script>

<template>
  <div class="movie-list">
    <MovieCard
      v-for="movie in movies" :key="movie.id"
      :id="movie.id"
      :collapse="movie.collapse"
      :poster="movie.poster"
      :title="movie.title"
      :year="movie.year"
      :genres="movie.genres"
      :directors="movie.directors"
      :actors="movie.actors"
      :descr="movie.description"
    />
  </div>
</template>


<style lang="scss" scoped>
.movie-list {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
</style>