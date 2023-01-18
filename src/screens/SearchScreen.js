import React, { useRef } from 'react';
import { Button, Devider, Screen, TextInput, View } from '../components/theme';
import { Logo } from '../components/Logo';
import { useSearch } from '../hooks/useSearch';
import { theme } from '../components/theme/themeConfig';
import { ResultsList } from '../components/ResultsList';

export function SearchScreen() {
	const { newSearch } = useSearch();

	// to avoid unnecessary re-renders, refs used to store TextInput value
	const search = useRef('');
	const setSearch = query => (search.current = query);
	const handleSearch = async () => {
		newSearch(search.current);
	};

	return (
		<Screen>
			<View
				width="100%"
				height="100%"
				justifyContent={!search.current ? 'center' : undefined}>
				<View paddingHorizontal={theme.pads.screenHorizontalPad}>
					<Logo />
					<View row marginBottom={20} alignItems="center">
						<TextInput
							placeholder="Search"
							onChangeText={setSearch}
							onSubmitEditing={handleSearch}
							returnKeyType="search"
							flex
						/>
						<Button onPress={handleSearch} marginLeft={10} />
					</View>
				</View>
				<Devider />
				<ResultsList />
			</View>
		</Screen>
	);
}
