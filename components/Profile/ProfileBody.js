import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View, ScrollView } from '../Themed';

import Post from '../Social/Post';

export default function ProfileBody() {
  return (
	<View style={styles.BodyContainer}>
		<View style={styles.BodyHeader}>
			<Text style={styles.BodyHeaderText}t>Posts</Text>
		</View>
		<Post />
		<Post />
		<Post />
		<Post />
		<Post />
	</View>
  )
}

const styles = StyleSheet.create({
	BodyContainer: {
		marginTop: "3%",
	},
	BodyHeader: {
		marginLeft: "3%",
		marginBottom: "3%",
	},
	BodyHeaderText: {
		fontSize: 20,
		fontWeight: 'bold',
	},

});