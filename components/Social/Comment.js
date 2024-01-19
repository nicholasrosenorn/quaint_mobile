import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

const CommentText = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nisl nisl ultricies nisl, vitae aliqua"


export default function Comment() {
  const colorScheme = useColorScheme();
  return (
	<View style={styles.container}>
		<View style = {styles.ProfilePictureContainer}>
			<Image style={styles.ProfilePicture} source={require('../../assets/images/profile_pic.jpg')} />
		</View>
		<View style={[styles.CommentContainer, {borderColor: Colors[colorScheme ?? 'light'].text}]}>
			<View style={styles.CommentHeader}>
				<Text style={styles.UsernameText}>Username</Text>
				<Text style={styles.DateText}>Dec 10 at 8:32 AM</Text>
			</View>
			<Text>{CommentText}</Text>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	ProfilePictureContainer: {
		marginHorizontal: 10,
		marginVertical: 10,
	},
	ProfilePicture: {
		borderRadius: 100,
		height: 40,
		width: 40,
	},
	CommentContainer: {
		flex: 1,
		borderRadius: 15,
		marginHorizontal: 10,
		marginVertical: 10,
		padding: 10,
		borderWidth: .5,
	},
	CommentHeader: {
		flexDirection: 'row',
		alignItems: 'baseline',
		marginBottom: 5,
	},
	UsernameText: {
		fontWeight: 'bold',
		fontSize: 14,
		marginRight: 5,
	},
	DateText:{
		fontSize: 12,
		fontWeight: 'normal',
	}
});