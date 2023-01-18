import React from 'react';
import { Image, Text, View } from './theme';
import { theme } from './theme/themeConfig';
import { UNKNOWN_AVATAR } from '../configs/searchConfigs';

export function Avatar({ path, name, ...props }) {
	return (
		<View
			{...props}
			backgroundColor={theme.palette.backgroundSecondary}
			alignItems="center"
			paddingVertical={5}
			paddingHorizontal={5}
			borderRadius={theme.roundness.full}
			row>
			<Image
				borderRadius={theme.roundness.full}
				height={30}
				width={30}
				source={{ uri: path || UNKNOWN_AVATAR }}
			/>
			<Text paddingHorizontal={10} color={theme.palette.textPrimary}>
				{name}
			</Text>
		</View>
	);
}
