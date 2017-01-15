import Immutable from 'immutable';

import {combineReducers} from 'redux-immutable';

import {createStore} from 'redux';

import person from './person';

const initialState = Immutable.Map();
const rootReducer = combineReducers({person});
const store = createStore(rootReducer, initialState);

export default store;