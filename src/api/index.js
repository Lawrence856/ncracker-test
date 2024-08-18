import Movies from '@/api/services/movies.js'

class Api {
  constructor() {
    this.movies = new Movies()
  }
}

export default new Api()