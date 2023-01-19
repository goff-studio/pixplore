import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image as RNImage, ScrollView, StyleSheet } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { Screen, Text, View } from '../components/theme';
import { theme } from '../components/theme/themeConfig';
import { ChipsLists } from '../components/ChipsLists';
import { Avatar } from '../components/Avatar';
import Back from '../components/Back';
import Views from '../components/Likes';
import { useSearch } from '../hooks/useSearch';

export function DetailsScreen() {
	const { params } = useRoute();
	const tagsArray = params?.tags.split(',') || [];
	const navigation = useNavigation();
	const { newSearch } = useSearch();
	const handleNewSearch = keyword => {
		newSearch(keyword);
		navigation.goBack();
	};
	return (
		<Screen edges={['bottom']}>
			<RNImage
				style={styles.gradient}
				position="absolute"
				source={{ uri: params.previewURL }}
				blurRadius={30}
			/>
			<ScrollView>
				<View
					paddingTop="15%"
					height={theme.dimensions.screenHeight / 3}
					paddingHorizontal={theme.dimensions.screenWidth * 0.08}>
					<Back previousScreen="Results" />
				</View>
				<View
					paddingBottom={20}
					style={styles.container}
					bottom={0}
					backgroundColor={theme.palette.backgroundPrimary}
					width="100%">
					<AutoHeightImage
						style={styles.preview}
						source={{ uri: params.webformatURL }}
						width={theme.dimensions.screenWidth / 1.2}
					/>
					<ChipsLists
						setSelectedValue={handleNewSearch}
						headerPad={theme.dimensions.screenWidth * 0.1}
						data={tagsArray}
					/>
					<View
						row
						marginBottom={20}
						alignItems="center"
						justifyContent="space-between"
						paddingHorizontal={theme.dimensions.screenWidth * 0.1}>
						<Avatar
							name={params?.user}
							path={params?.userImageURL}
						/>
						<Views number={params?.view} />
					</View>
					{params?.imageWidth && params?.imageHeight && (
						<Text
							paddingHorizontal={
								theme.dimensions.screenWidth * 0.1
							}>
							Original Size:{params.imageWidth} x{' '}
							{params.imageHeight}
						</Text>
					)}
				</View>
			</ScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	preview: {
		borderRadius: theme.roundness.large,
		alignSelf: 'center',
		marginTop: -100,
	},
	container: {
		borderTopLeftRadius: theme.roundness.large,
		borderTopRightRadius: theme.roundness.large,
	},
	gradient: {
		width: '100%',
		height: '100%',
	},
});
