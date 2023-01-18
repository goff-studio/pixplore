import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from './theme';
import { theme } from './theme/themeConfig';

function Back({ previousScreen, ...props }) {
	const navigation = useNavigation();
	const handleNavigation = () => navigation.goBack();
	return (
		<View
			onPress={handleNavigation}
			row
			alignItems="center"
			alignSelf="flex-start"
			paddingRight={10}
			paddingLeft={5}
			paddingVertical={10}
			borderRadius={theme.roundness.large}
			backgroundColor={theme.palette.backgroundSecondary}>
			<Svg
				width={18}
				height={18}
				viewBox="0 0 512 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}>
				<Path
					d="M328 112L184 256l144 144"
					stroke={theme.palette.textPrimary}
					strokeWidth={48}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</Svg>
			<Text size={theme.fontSize.semiSmall}>{previousScreen}</Text>
		</View>
	);
}

export default Back;
