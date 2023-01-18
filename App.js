import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import Navigation from './src/Navigation';
import { store } from './src/store/store';
import ErrorBoundary from './src/components/ErrorBoundry';

export default function App() {
	return (
		<ErrorBoundary>
			<SafeAreaProvider>
				<Provider store={store}>
					<Navigation />
					<Toast />
				</Provider>
			</SafeAreaProvider>
		</ErrorBoundary>
	);
}
