import { all } from 'redux-saga/effects'
import gifs from './gifs/sagas'

export default function * root() {
  yield all([
    gifs()
  ])
}
