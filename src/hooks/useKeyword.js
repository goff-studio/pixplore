import { useSelector } from 'react-redux';

export const useKeyword = () => {
	const { keyword } = useSelector(store => store?.resultsReducer);
	return keyword;
};
