
import { loadGifs, setGifs, setType } from './actions'
import { takeLatest, select, call, all, put } from '@redux-saga/core/effects'
import getGifs from '../../services/getGifs'

function * _loadGifs () {
  // Some side effectss
  const { limit, offset, type, search } = yield select(s => s.gifs)
  const { pagination, data } = yield call(getGifs, type, limit, offset, search)
  yield all([
    put(setGifs({
      total: pagination.total_count,
      data
    }))
  ])
}

// Use the action creator's type property to handle action
export default function * root () {
  yield all([
    takeLatest(loadGifs.type, _loadGifs),
    takeLatest(setType.type, _loadGifs)
  ])
}
