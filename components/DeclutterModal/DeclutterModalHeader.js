import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

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

export default function DeclutterModalHeader() {
  return (
	<ImageBackground source={require("../../assets/images/declutter_background.jpg")} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
		<View style={styles.HeaderTextContainer}>
			<View style={styles.HeaderTextRow}>
				<Text style={styles.HeaderTitle}>Daily</Text>	
				<Text style={styles.HeaderTitleAlt}> Declutter</Text>	
			</View>
			<Text style={styles.HeaderDate}>{currentDate}</Text>
		</View>
	</ImageBackground>
  )
}

const styles = StyleSheet.create({
	HeaderContainer: {
		flex: .2,
		marginTop: '10%',
		marginBottom: '1%',
		borderRadius: 10,
		marginHorizontal: '5%',
		backgroundColor: '#ccc',
	},
	HeaderTextContainer: {
		marginHorizontal: '5%',
		marginVertical: '7%',
		backgroundColor: null,

	}, 
	HeaderTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fbfbfb',
	},
	HeaderTitleAlt:{
		fontSize: 30,
		fontWeight: 'bold',
		color: '#8590C8',
	},
	HeaderDate: {
		fontSize: 20,
		color: '#fbfbfb',
	},
	imageContainer:{
		flex: .3,
		backgroundColor: "#191919",
		borderRadius: 20,
		marginHorizontal: '2%',
		marginVertical: '5%',
	},
	image: {
		opacity: 0.28,
		borderRadius: 20,
	  },
	HeaderTextRow: {
		flexDirection: 'row',
		backgroundColor: null,

	}
  });