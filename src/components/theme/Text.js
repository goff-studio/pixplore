import React from 'react';
import { Text as RNText, TouchableOpacity } from 'react-native';
import { theme } from './themeConfig';

export function Text({
	children,
	style,
	color = theme.palette.textPrimary,
	size = theme.fontSize.small,
	paddingTop,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingVertical,
	paddingHorizontal,
	onPress,
	textAlign,
	flex,
	width,
	height,
	...props
}) {
	const styleProp = {
		color: (!!onPress && theme.palette.textSecondary) || color,
		fontSize: size,
		flex: flex ? 1 : 0,
		width,
		height,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingBottom,
		paddingVertical,
		paddingHorizontal,
		textAlign,
		...style,
	};

	if (onPress) {
		return (
			<TouchableOpacity onPress={onPress}>
				<RNText style={[style, styleProp]} {...props}>
					{children}
				</RNText>
			</TouchableOpacity>
		);
	}

	return (
		<RNText style={[style, styleProp]} {...props}>
			{children}
		</RNText>
	);
}
