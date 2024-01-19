import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';


export default function Tag({tag}) {
  const colorScheme = useColorScheme();
  return (
	<TouchableOpacity style={styles.container}>
		<Text style={styles.TagText}>{tag}</Text>
	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 3,
		paddingHorizontal: 12,
		borderRadius: 30,
		backgroundColor: '#7CD1BD',
		marginRight: 5,
		marginVertical: 5,
	},
	TagText: {
		fontSize: 12,
		color: '#fff',
	}
});