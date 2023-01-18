export const UPDATE_PAGE = 'UPDATE_PAGE';
export const NEW_SEARCH = 'NEW_SEARCH';

export const updatePage = data => ({
	type: UPDATE_PAGE,
	data,
});

export const newSearchResults = data => ({
	type: NEW_SEARCH,
	data,
});
