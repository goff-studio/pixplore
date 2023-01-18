import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from './theme';
import { theme } from './theme/themeConfig';
import { screens } from '../configs/navigationConfig';

export function ResultListItem({ item }) {
	const navigation = useNavigation();
	const navigateToDetails = () => navigation.navigate(screens.details, item);
	return (
		<Pressable onPress={navigateToDetails}>
			<Image
				marginHorizontal={12}
				borderRadius={theme.roundness.large}
				resizeMode="cover"
				source={{ uri: item.previewURL }}
				width={theme.dimensions.screenWidth / 2.5}
				height={theme.dimensions.screenWidth / 2.5}
			/>
		</Pressable>
	);
}
