import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import * as Progress from 'react-native-progress';

import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ParseCardTitle({cardTitle, altTextColorIsStart, cardTitleAltColor}) {
	var cardTitleArray = cardTitle.split(" ");
	if (altTextColorIsStart) {
		var cardTitleStart = cardTitleArray[0];
		var cardTitleEnd = "";
		for (var i = 1; i < cardTitleArray.length; i++) {
			cardTitleEnd += cardTitleArray[i] + " ";
		}
		return (
			<View style={styles.taskRow}>
				<Text>
					<Text style={[styles.HeaderTitle, {color: cardTitleAltColor}]}>{cardTitleStart}</Text>	
					<Text style={styles.HeaderTitleAlt}> {cardTitleEnd}</Text>	
				</Text>
			</View>
		)
	} else {
		var cardTitleStart = "";
		var cardTitleEnd = "";
		for (var i = 0; i < cardTitleArray.length - 1; i++) {
			cardTitleStart += cardTitleArray[i] + " ";
		}
		cardTitleEnd = cardTitleArray[cardTitleArray.length - 1];
		return (
			<View style={styles.taskRow}>
				<Text>
					<Text style={styles.HeaderTitle}>{cardTitleStart}</Text>	
					<Text style={[styles.HeaderTitle, {color: cardTitleAltColor}]}>{cardTitleEnd}</Text>	
				</Text>
			</View>
		)
	}
}

export default function VenturesCard({backgroundPic, cardTitle, altTextColorIsStart, cardTitleAltColor, percentComplete}) {
	const router = useRouter();
	return (
		<TouchableOpacity style={styles.container} onPress={() => {router.push("/")}}>
			<ImageBackground source={backgroundPic} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
				<View style={styles.taskRow}>
					<ParseCardTitle cardTitle={cardTitle} altTextColorIsStart={altTextColorIsStart} cardTitleAltColor={cardTitleAltColor}/>	
				</View>
				<View style={styles.progressBarContainer}>
					{/*https://www.npmjs.com/package/react-native-progress*/}
					<Progress.Bar progress={percentComplete} width={windowWidth * .37} color={cardTitleAltColor} unfilledColor={"#828282"} borderWidth={0}/>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  container: {
	justifyContent: 'left',
	borderRadius: 20,
	width: '41%',
	height: 170,
	marginHorizontal: '1.4%',
  },
  imageContainer:{
	flex: 1,
	backgroundColor: '#474340',
	borderRadius: 20,
  },
  image: {
	opacity: 0.28,
	borderRadius: 20,
  },
  taskHeaderText :{
	fontSize: 22,
	fontWeight: '500',
	textAlign: 'left',
	marginLeft: '5%',
	marginTop: '8%',
	color: '#fbfbfb',
  },
  taskRow: {
	alignItems: 'center',
	marginRight: '5%',
	backgroundColor: null,
	marginTop: '5%',
	marginLeft: '1.4%',
	flex: 1,
  },
  HeaderTitle: {
	fontSize: 22,
	fontWeight: '500',
	color: '#fbfbfb',
  },
  HeaderTitleAlt:{
	fontSize: 22,
	fontWeight: '500',
	color: '#fbfbfb',
  },
  progressBarContainer: {
	backgroundColor: null,
	marginLeft: '4%',
	flex: .2,
  }
});
