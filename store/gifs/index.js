import { setGifs, loadGifs, setType, setSearch } from './actions'

const initialState = {
  limit: 25,
  offset: 0,
  total: 0,
  hasMore: false,
  search: undefined,
  loading: false,
  type: 'trending',
  images: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case setSearch.type:
      return {
        ...state,
        search: payload
      }
    case setType.type:
      return {
        ...initialState,
        search: payload === 'search' && state.search,
        type: payload
      }
    case loadGifs.type:
      return {
        ...state,
        loading: true
      }
    case setGifs.type:
      return {
        ...state,
        loading: false,
        total: payload.total,
        offset: state.offset + state.limit,
        images: [
          ...state.images,
          ...payload.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            sizes: {
              preview: gif.images.fixed_width,
              original: gif.images.original
            }
          }))
        ]
      }

    default:
      return state
  }
}
