import React from 'react';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';

export function ChipsItem({ name, isActive, ...props }) {
	return (
		<View
			marginVertical={20}
			{...props}
			borderRadius={theme.roundness.large}
			paddingVertical={10}
			paddingHorizontal={20}
			backgroundColor={
				isActive
					? theme.palette.primary
					: theme.palette.backgroundSecondary
			}>
			<Text
				size={theme.fontSize.semiSmall}
				color={
					isActive
						? theme.palette.backgroundPrimary
						: theme.palette.textPrimary
				}>
				{name}
			</Text>
		</View>
	);
}
