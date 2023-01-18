import { useDispatch } from 'react-redux';
import { fetchData } from '../helpers/communicationHelper';
import { newSearchResults, updatePage } from '../store/actions';
import { useCurrentPage } from './useCurrentPage';
import { useKeyword } from './useKeyword';

export const useSearch = () => {
	const dispatch = useDispatch();
	const currentPage = useCurrentPage();
	const storedKeyword = useKeyword();

	const newSearch = keyword => {
		if (!keyword) return;
		fetchData(keyword).then(data => {
			dispatch(
				newSearchResults({
					results: data?.hits || [],
					keyword,
					total: data?.total || 0,
				}),
			);
		});
	};

	const nextPage = () => {
		if (!storedKeyword) return;
		const page = currentPage + 1;
		fetchData(storedKeyword, page).then(data => {
			dispatch(updatePage({ results: data?.hits || [], page }));
		});
	};

	return { newSearch, nextPage };
};
