import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import Navigation from './src/Navigation';
import { store } from './src/store/store';

export default function App() {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<Navigation />
				<Toast />
			</Provider>
		</SafeAreaProvider>
	);
}
