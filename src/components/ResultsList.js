import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSearchData } from '../hooks/useSearchData';
import { ResultListItem } from './ResultListItem';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';
import EmptyState from './EmptyState';
import { useSearch } from '../hooks/useSearch';
import { useKeyword } from '../hooks/useKeyword';
import { ChipsLists } from './ChipsLists';
import { ChipsItem } from './ChipsItem';

export function ResultsList() {
	const { results, total } = useSearchData();
	const { nextPage } = useSearch();
	const resultsFlatlistRef = useRef();
	const currentKeyword = useKeyword();

	// Users Flatlist's related handlers
	const [activeUser, setActiveUser] = useState('');
	const selectAllUsers = () => setActiveUser('');
	const handleRenderUserHeader = () => (
		<ChipsItem
			onPress={selectAllUsers}
			marginLeft={theme.pads.screenHorizontalPad}
			isActive={!activeUser}
			marginRight={10}
			name="All users"
		/>
	);
	const handleRenderImage = ({ item, index }) => (
		<ResultListItem index={index} item={item} />
	);

	// Result Flatlist's related handlers
	const handleRenderResultSeparator = () => (
		<View
			width={theme.pads.screenHorizontalPad}
			height={theme.pads.screenHorizontalPad}
		/>
	);
	const handleRenderResultHeader = () => (
		<ChipsLists
			header={handleRenderUserHeader}
			selectedValue={activeUser}
			setSelectedValue={setActiveUser}
			data={authors}
		/>
	);

	const handleRenderEmptyState = () => <EmptyState />;

	const handleFooter = () => (
		<View
			paddingTop={10}
			alignItems="center"
			height={theme.dimensions.screenWidth / 1.25}
			justifyContent="flex-start">
			<Text>No more image found</Text>
		</View>
	);
	// to remove posible duplicated authors
	const authors = [...new Set(results.map(record => record?.user))];

	// to reset scroll index on new searchs
	useEffect(() => {
		!!currentKeyword &&
			resultsFlatlistRef.current.scrollToOffset({
				animated: true,
				offset: 0,
			});
	}, [currentKeyword]);

	const filteredResults = results.filter(
		record => !activeUser || record.user === activeUser,
	);

	return (
		<View center>
			<FlatList
				ref={resultsFlatlistRef}
				onEndReached={
					filteredResults.length === results.length &&
					results.length < total &&
					nextPage
				}
				onEndReachedThreshold={0.75}
				columnWrapperStyle={styles.columnWrapper}
				ListHeaderComponent={
					!!results?.length && handleRenderResultHeader
				}
				ListFooterComponent={!!results?.length && handleFooter}
				ListEmptyComponent={handleRenderEmptyState}
				ItemSeparatorComponent={handleRenderResultSeparator}
				numColumns={2}
				data={filteredResults}
				renderItem={handleRenderImage}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	columnWrapper: {
		alignSelf: 'center',
	},
});
