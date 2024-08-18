import { computed, ref } from 'vue'

export function useSortMovies(movies) {
  const selectedSort = ref('')
  const sortedMovies = ref(movies)

  const onSort = (value) => {
    switch (value) {
      case 'sort-by-name':
        return movies.value.sort((a, b) => a.title.localeCompare(b.title))
      case 'sort-by-year':
        return movies.value.sort((a, b) => a.year - b.year)
      default:
        return movies.value
    }
  }

  return { sortedMovies, selectedSort, onSort }
}