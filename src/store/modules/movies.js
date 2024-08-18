import api from '@/api/index.js'

const movies = {
  namespaced: true,

  state: {
    movies: [],
    movie: null
  },

  actions: {
    async fetchMovies({ commit }) {
      const res = await api.movies.getMovies()

      if (res.status === 200 && res.data.success) {
        commit('SET_MOVIES', res.data.data)
      }
    },

    async fetchMovieById({ commit }, id) {
      const res = await api.movies.getMovie(id)

      if (res.status === 200 && res.data.success) {
        commit('SET_MOVIE', res.data.data)
      }
    },

    setMovieById({ state, commit }, id) {
      const movie = state.movies.find((movie) => movie.id === Number(id))
      commit('SET_MOVIE', movie)
    }
  },

  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload
    },
    SET_MOVIE: (state, payload) => {
      state.movie = payload
    }
  },

  getters: {
    GET_MOVIES: state => state.movies,
    GET_MOVIE: state => state.movie
  }
}

export default movies