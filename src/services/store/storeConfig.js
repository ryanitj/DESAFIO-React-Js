import { createStore, combineReducers } from "@reduxjs/toolkit";


import shelfReducer from './reducers/shelfs'

const reducers = combineReducers({
    shelfs: shelfReducer
})


function storeConfig() {
    return createStore(reducers)
}

export default storeConfig