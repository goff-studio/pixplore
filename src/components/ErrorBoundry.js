import React from 'react';
import { Screen, Text, View } from './theme';
import { Logo } from './Logo';
import { theme } from './theme/themeConfig';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	// eslint-disable-next-line no-unused-vars
	componentDidCatch(error, errorInfo) {
		// We can also the log the error to the backend or any error reporting services
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Screen paddingHorizontal={theme.pads.screenHorizontalPad}>
					<View width="100%" height="100%" center>
						<Logo left="Something" right="Happened" />
						<Text>
							The idea is to avoid crashing the app and dealing
							with core error handling here
						</Text>
					</View>
				</Screen>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
