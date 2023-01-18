import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './screens/SearchScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { screens } from './configs/navigationConfig';

const { Navigator, Screen } = createStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name={screens.search} component={SearchScreen} />
				<Screen name={screens.details} component={DetailsScreen} />
			</Navigator>
		</NavigationContainer>
	);
}
