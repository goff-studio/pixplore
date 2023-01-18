import React from 'react';
import FastImage from 'react-native-fast-image';

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
		<FastImage
			resizeMode={resizeMode}
			style={additionalStyle}
			source={source}
			{...props}>
			{children}
		</FastImage>
	);
}
