import React from 'react';
import { View } from './View';
import { theme } from './themeConfig';

export function Devider() {
	return (
		<View
			height={1}
			marginHorizontal={-24}
			backgroundColor={theme.palette.backgroundSecondary}
		/>
	);
}
