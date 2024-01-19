import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';


import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function ProfileHeader() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
	<View style={styles.HeaderContainer}>
		<View>
			<Image
                style={styles.profileImage}
                source={require('../../assets/images/profile_pic.jpg')}
            />
		</View>
		<View style={styles.usernameContainer}>
			<Text style={styles.usernameTitle}>Username</Text>
		</View>
		<View style={styles.ButtonRow}>
			<TouchableOpacity style={styles.viewStatsButton} onPress={() => {router.push("/Stats")}}>
				<View style={styles.buttonTextRow}>
					<Text style={styles.viewStatsText}>Account Stats  </Text>
					<Ionicons name="stats-chart" size={22} color="white" />
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.editProfileButton, {borderColor: Colors[colorScheme ?? 'light'].text}]} onPress={() => {router.push("/Settings")}}>
				<View style={styles.buttonTextRow}>
					<Text style={styles.editProfileText}>Settings  </Text>
					<Ionicons name="settings-outline" size={24} color={Colors[colorScheme ?? 'light'].text} />
				</View>

			</TouchableOpacity>
		</View>
		
	</View>
  )
}

const styles = StyleSheet.create({
	HeaderContainer: {
		marginTop: "3%",
	},
	profileImage: {
		width: 120,
		height: 120,
		borderRadius: 100,
		alignSelf: 'center',
	},
	usernameContainer: {
		alignSelf: 'center',
		marginTop: "3%",
	},
	usernameTitle: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	ButtonRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: "5%",
	},
	viewStatsButton: {
		backgroundColor: "#7CD1BD",
		borderRadius: 30,
		padding: 7,
		alignItems: 'center',
		width: "40%",
	}, 
	viewStatsText: {
		color: 'white',
		fontWeight: '500',
	},
	editProfileButton: {
		borderWidth: 1,
		borderRadius: 30,
		padding: 7,
		alignItems: 'center',
		width: "40%",
	},
	editProfileText: {
		fontWeight: '500',
	},
	buttonTextRow: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: null,
		justifyContent: 'center',
	},
});