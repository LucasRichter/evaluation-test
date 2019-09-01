import { createAction } from 'redux-starter-kit'

// Create an action creator
export const loadGifs = createAction('GIFS/LOAD')
export const setGifs = createAction('GIFS/SET')
export const setType = createAction('GIFS/SET_TYPE')
export const setSearch = createAction('GIFS/SEARCH')
