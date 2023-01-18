import { useSelector } from 'react-redux';

export const useCurrentPage = () => {
	const { page } = useSelector(store => store?.resultsReducer);
	return page;
};
