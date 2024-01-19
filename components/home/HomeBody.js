import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather, Octicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import HistoryCard from './HistoryCard';

const date = new Date();

switch (date.getMonth()) {
	case 0:
		month = "January";
		break;
	case 1:
		month = "February";
		break;
	case 2:
		month = "March";
		break;
	case 3:
		month = "April";
		break;
	case 4:
		month = "May";
		break;
	case 5:
		month = "June";
		break;
	case 6:
		month = "July";
		break;
	case 7:
		month = "August";
		break;
	case 8:
		month = "September";
		break;
	case 9:
		month = "October";
		break;
	case 10:
		month = "November";
		break;
	case 11:
		month = "December";
		break;
}

let day = date.getDate();
let year = date.getFullYear();
let currentDate = `${month} ${day}, ${year}`;

export default function HomeBody() {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.BodyContainer}>
			<View style={styles.HeaderTextContainer}>
				<Text style={styles.HeaderText}>Your Minimalism Journey</Text>
				<Octicons name="history" size={24} color="#9e9e9e" />
			</View>
			<View style={styles.HistoryContainer}>
				<HistoryCard topic="Shirts" date="1/19/24" textColor="#D1C87C" backgroundPic={require("../../assets/images/home/shirts.jpg")} />
				<HistoryCard topic="Plates and Bowls" date="1/18/24" textColor="#D17C90" backgroundPic={require("../../assets/images/home/plates.jpg")} />
				<HistoryCard topic="Desktop Items" date="1/17/24" textColor="#7CD1BD" backgroundPic={require("../../assets/images/home/desktop.jpg")} />
				<HistoryCard topic="Books" date="1/15/24" textColor="#8590C8" backgroundPic={require("../../assets/images/home/books.jpg")} />
			</View>
			<TouchableOpacity style={styles.seeMore}>
				<Text style={styles.seeMoreText}>See More</Text>
			</TouchableOpacity>
		</View>
	)
}


const styles = StyleSheet.create({
	BodyContainer: {
		marginHorizontal: 10,
	},
	HeaderTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	HeaderText: {
		fontSize: 16,
		textAlign: 'left',
		fontWeight: '600',
    	color: '#9e9e9e',
	},
	HistoryContainer: {
		alignItems: 'flex-end',
		marginTop: 10,
	},
	seeMore: {
		alignItems: 'flex-end',
	},
	seeMoreText: {
		fontSize: 15,
		fontWeight: '600',
		color: '#9e9e9e',
	},
  });