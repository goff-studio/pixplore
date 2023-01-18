import React from 'react';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';

export function Logo() {
	return (
		<View row paddingVertical={20}>
			<Text size={theme.fontSize.large}>Explore</Text>
			<Text
				paddingHorizontal={5}
				size={theme.fontSize.large}
				color={theme.palette.accent}>
				Pixabay
			</Text>
		</View>
	);
}
