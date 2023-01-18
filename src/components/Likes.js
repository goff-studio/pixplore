import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';

function Views({ number, ...props }) {
	return (
		<View row alignItems="center">
			<Svg
				width={18}
				height={18}
				viewBox="0 0 512 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}>
				<Path
					d="M256 320c35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64z"
					fill={theme.palette.textSecondary}
				/>
				<Path
					d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.921 31.921 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.193 32.193 0 005.043-17.395 32.189 32.189 0 00-5.143-17.365zM256 352a95.998 95.998 0 01-94.155-114.729 95.997 95.997 0 0175.426-75.426 95.995 95.995 0 0198.55 40.82A95.998 95.998 0 01352 256a96.11 96.11 0 01-96 96z"
					fill={theme.palette.textSecondary}
				/>
			</Svg>
			<Text paddingHorizontal={5}>{number || 0}</Text>
		</View>
	);
}

export default Views;
