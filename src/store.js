import Immutable from 'immutable';

import {combineReducers} from 'redux-immutable';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import person from './person';

export const initialState = Immutable.Map();
const rootReducer = combineReducers({person});
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
