import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from './themeConfig';
import { View } from './View';

export function Screen({
	barStyle = 'dark-content',
	barStyleHidden,
	barBackgroundColor = 'transparent',
	barTranslucent = true,
	children,
	edges = ['top'],
	paddingHorizontal = 0,
	...props
}) {
	return (
		<SafeAreaView style={styles.container} edges={edges} {...props}>
			<StatusBar
				translucent={barTranslucent}
				backgroundColor={barBackgroundColor}
				barStyle={barStyle}
				hidden={barStyleHidden}
			/>
			<View paddingHorizontal={paddingHorizontal}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.palette.backgroundPrimary,
		flex: 1,
	},
});
