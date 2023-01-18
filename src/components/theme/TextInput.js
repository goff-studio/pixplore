import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { theme } from './themeConfig';

export function TextInput({
	children,
	flex,
	center,
	backgroundColor = theme.palette.backgroundSecondary,
	textAlign,
	color = theme.palette.textPrimary,
	borderRadius = theme.roundness.full,
	borderWidth,
	borderBottomWidth,
	borderColor,
	style,
	width,
	height,
	marginVertical,
	marginHorizontal,
	paddingVertical = 10,
	paddingHorizontal = 20,
	marginTop,
	marginBottom,
	marginLeft,
	marginRight,
	paddingBottom,
	paddingTop,
	paddingLeft,
	paddingRight,
	disabled,
	leftIcon,
	placeholderColor = theme.palette.textSecondary,
	...props
}) {
	const additionalStyle = {
		textAlign,
		color,
		backgroundColor,
		borderRadius,
		borderWidth,
		borderBottomWidth,
		borderColor,
		width,
		height,
		marginVertical,
		marginHorizontal,
		paddingVertical,
		paddingHorizontal,
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		paddingBottom,
		paddingTop,
		paddingLeft,
		flex: flex ? 1 : undefined,
		paddingRight,
		lineHeight: 0,
		...style,
	};
	return (
		<RNTextInput
			underlineColorAndroid="transparent"
			placeholderTextColor={placeholderColor}
			style={additionalStyle}
			{...props}
		/>
	);
}
