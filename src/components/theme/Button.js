import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { View } from './View';
import { theme } from './themeConfig';

export function Button({ label, marginLeft, onPress, ...props }) {
	return (
		<View
			marginLeft={marginLeft}
			backgroundColor={theme.palette.backgroundSecondary}
			borderRadius={theme.roundness.full}
			onPress={onPress}
			disabled={!onPress}
			center
			paddingVertical={10}
			paddingHorizontal={10}>
			<Svg
				width={22}
				height={22}
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}>
				<Circle
					cx={8.31097}
					cy={8.31096}
					r={5.87675}
					transform="rotate(-45 8.311 8.311)"
					stroke={theme.palette.textPrimary}
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M13.64 13.64l-1.126-1.125"
					stroke={theme.palette.textPrimary}
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Rect
					x={12.0968}
					y={14.8673}
					width={3.91783}
					height={6.16938}
					rx={1.95892}
					transform="rotate(-45 12.097 14.867)"
					fill={theme.palette.accent}
				/>
			</Svg>
		</View>
	);
}
