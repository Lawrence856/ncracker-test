import { createStore } from 'vuex'
import movies from '@/store/modules/movies.js'

const store = createStore({
  modules: {
    movies
  }
})

export default store