import React from 'react';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';

export function Logo({ left = 'Explore', right = 'Pixabay' }) {
	return (
		<View row paddingVertical={20}>
			<Text size={theme.fontSize.large}>{left}</Text>
			<Text
				paddingHorizontal={5}
				size={theme.fontSize.large}
				color={theme.palette.accent}>
				{right}
			</Text>
		</View>
	);
}
