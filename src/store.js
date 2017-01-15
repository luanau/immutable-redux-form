import Immutable from 'immutable';

import {combineReducers} from 'redux-immutable';


import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import person from './person';
import { reducer as form } from 'redux-form/immutable';

export const initialState = Immutable.Map({'person':{}});
const rootReducer = combineReducers({person, form});
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
