import network from '@/api/network.js'

class Movies {
  async getMovies() {
    return await network.get('/movies/')
  }

  async getMovie(id) {
    return await network.get('/movie/' + id)
  }
}

export default Movies