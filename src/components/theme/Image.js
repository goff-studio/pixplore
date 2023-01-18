import React from 'react';
import { Image as RNImage } from 'react-native';

export function Image({
	source,
	children,
	style,
	width,
	height,
	resizeMode,
	position,
	borderRadius,
	marginHorizontal,
	marginVertical,
	...props
}) {
	const additionalStyle = {
		...style,
		width,
		height,
		borderRadius,
		marginHorizontal,
		marginVertical,
		overflow: borderRadius ? 'hidden' : undefined,
		position,
	};
	return (
		<RNImage
			resizeMode={resizeMode}
			style={additionalStyle}
			source={source}
			{...props}>
			{children}
		</RNImage>
	);
}
