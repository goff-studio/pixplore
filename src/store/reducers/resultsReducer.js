import { NEW_SEARCH, UPDATE_PAGE } from '../actions';
import { initialSearchReducerValue } from '../../configs/searchConfigs';

const initState = initialSearchReducerValue;

export const resultsReducer = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_PAGE:
			return {
				...state,
				page: action.data.page,
				results: [...state.results, ...action.data.results],
			};
		case NEW_SEARCH:
			return { ...initState, ...action.data };
		default:
			return state;
	}
};
