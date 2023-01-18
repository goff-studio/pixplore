import React from 'react';
import { FlatList } from 'react-native';
import { View } from './theme';
import { ChipsItem } from './ChipsItem';

export function ChipsLists({
	data,
	selectedValue,
	setSelectedValue,
	header,
	headerPad,
}) {
	const handleRenderUserSeparator = () => <View width={10} height={10} />;
	const handleRenderUserHeader = () => {
		if (header) return header();
		return <View width={headerPad || 10} height={10} />;
	};
	const handleRenderUser = ({ item }) => (
		<ChipsItem
			isActive={selectedValue === item}
			onPress={() => !!setSelectedValue && setSelectedValue(item)}
			name={item}
		/>
	);

	return (
		<FlatList
			showsHorizontalScrollIndicator={false}
			ListHeaderComponent={handleRenderUserHeader}
			ItemSeparatorComponent={handleRenderUserSeparator}
			horizontal
			data={data}
			renderItem={handleRenderUser}
		/>
	);
}
