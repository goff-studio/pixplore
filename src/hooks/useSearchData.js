import { useSelector } from 'react-redux';

export const useSearchData = () => useSelector(store => store?.resultsReducer);
