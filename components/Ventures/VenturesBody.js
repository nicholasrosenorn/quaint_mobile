import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import VenturesCard from './VenturesCard';
import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function VenturesBody() {
  return (
	<View style={styles.container}>
		<View style={styles.VenturePageHeader}>
			<Text style={styles.VenturePageHeaderText}>Explore</Text>
		</View>
		<View style={styles.venturesRow}>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/relationships_venture.jpg")} 
				cardTitle={"Meaningful Relationships"} 
				altTextColorIsStart={false} 
				cardTitleAltColor = {"#D17C90"}
				percentComplete={0.4}
			/>
			<VenturesCard 
				backgroundPic={require("../../assets/images/mindfulness_background.jpg")} 
				cardTitle={"Meditation, Zen, and Mindfulness"} 
				altTextColorIsStart={false} 
				cardTitleAltColor = {"#D1C87C"}
				percentComplete={0.3}
			/>
		</View>
		<View style={styles.venturesRow}>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/finances_venture.jpg")} 
				cardTitle={"Minimalism and Finances"} 
				altTextColorIsStart={false} 
				cardTitleAltColor = {"#7C9ED1"}
				percentComplete={0}
			/>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/fitness_venture.jpg")} 
				cardTitle={"Wellness and Fitness"} 
				altTextColorIsStart={false} 
				cardTitleAltColor = {"#DEB4D5"}
				percentComplete={1}
			/>
		</View>
		<View style={styles.venturesRow}>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/career_venture.jpg")} 
				cardTitle={"Minimalism in your Career"} 
				altTextColorIsStart={false} 
				cardTitleAltColor = {"#B3B3B3"}
				percentComplete={0.66}
			/>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/sustainability_venture.jpg")} 
				cardTitle={"Sustainability and Eco-Minimalism"} 
				altTextColorIsStart={true} 
				cardTitleAltColor = {"#7CD1BD"}
				percentComplete={0.23}
			/>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
  container: {
	marginTop:"3%"
  },
  VenturePageHeader:{
	marginTop: "3%",
	marginHorizontal: "5%",
  },
  VenturePageHeaderText: {
	color: "#9e9e9e",
	fontSize: 20,
	textAlign: 'left',
	fontWeight: '600',
  },
  venturesRow: {
	flexDirection: 'row',
	marginTop: "3%",
	justifyContent: 'space-around',
  }
});