import Axios from 'axios'

export default async (action = 'trending', limit = 25, offset = 0, q = undefined) => {
  const result = await Axios.get('/gifs/' + action, { params: { q, limit, offset, api_key: process.env.API_KEY } })
  return result.data
}
