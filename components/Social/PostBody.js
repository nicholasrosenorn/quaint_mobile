import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function PostBody({postText}) {
  return (
	<View style={styles.container}>
		<View style={styles.textContainer}>
			<Text>
				{postText}
			</Text>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: .5,
	},
	textContainer: {
		marginTop: 10,
		marginHorizontal: 10,
	},
});