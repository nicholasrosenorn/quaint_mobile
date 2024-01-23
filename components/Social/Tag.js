import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

function oppositeColor(colorScheme) {
	if (colorScheme == 'light') {
		return 'dark';
	} else {
		return 'light';
	}
}

export default function Tag({tag}) {
  var colorScheme = useColorScheme();
  colorScheme = oppositeColor(colorScheme);
  return (
	<TouchableOpacity style={styles.container}>
		<Text style={[styles.TagText, {color: Colors[colorScheme ?? 'light'].text}]}>{tag}</Text>
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
		color: '#242424',
	}
});