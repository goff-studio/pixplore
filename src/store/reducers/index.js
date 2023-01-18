import { combineReducers } from 'redux';
import { resultsReducer } from './resultsReducer';

// for sure this app doesn't need to have multiple reducers, but the idea is to show the ability of combining reducers
export const coreReducer = combineReducers({ resultsReducer });
