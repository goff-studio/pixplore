import { legacy_createStore as createStore } from 'redux';
import { coreReducer } from '../reducers';

export const store = createStore(coreReducer, undefined);
