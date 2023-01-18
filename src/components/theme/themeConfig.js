import { Dimensions } from 'react-native';

const fontSize = {
	xxSmall: 10,
	xSmall: 12,
	small: 14,
	semiSmall: 16,
	medium: 18,
	semiLarge: 20,
	large: 22,
	xLarge: 24,
	xxLarge: 26,
	xxxLarge: 32,
	ultraLarge: 42,
};

const roundness = {
	full: 100,
	large: 20,
	normal: 16,
	medium: 10,
	small: 6,
};

const pads = {
	screenHorizontalPad: 24,
	screenVerticalPad: 15,
};
const dimensions = {
	screenWidth: Dimensions.get('window').width,
	screenHeight: Dimensions.get('window').height,
};
const palette = {
	primaryDark: '#616161',
	primaryLight: '#F5F5F5',
	primary: '#022150',
	accent: '#EA6C00',
	textPrimary: '#212121',
	textSecondary: '#868686',
	border: '#BDBDBD',
	backgroundPrimary: '#FFFFFF',
	backgroundSecondary: '#EFF2F6',
};
export const theme = {
	fontSize,
	roundness,
	pads,
	dimensions,
	palette,
};
