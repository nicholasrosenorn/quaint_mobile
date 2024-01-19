import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import Tag from './Tag';

export default function PostHeader({username, profileImage, date}) {
  return (
	<View style={styles.container}>
		<View style={styles.headerRow}>
			<Image
					style={styles.profileImage}
					source={require('../../assets/images/profile_pic.jpg')}
				/>
			<View style={styles.columnNameDate}>
				<View style={styles.UsernameDateRow}>
					<Text style={styles.usernameText}>
						{username}
					</Text>
					<Text style={styles.dateText}>
						{date}
					</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Tag tag="Minimalism"/>
					<Tag tag="Mindfulness"/>
				</View>
			</View>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: .3,
		backgroundColor: null,
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 100,
		marginHorizontal: 10,
		marginTop: 10,
	},
	headerRow: {
		flexDirection: 'row',
	},
	columnNameDate:{
		flexDirection: 'column',
		marginTop: 10,
	},
	usernameText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	dateText: {
		fontSize: 12,
		fontWeight: 'normal',
	},
	UsernameDateRow: {
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
	},
});