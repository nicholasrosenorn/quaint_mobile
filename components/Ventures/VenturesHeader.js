import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import VenturesCard from './VenturesCard';
import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function VenturesHeader() {
  return (
	<View style={styles.container}>
		<View style={styles.VenturePageHeader}>
			<Text style={styles.VenturePageHeaderText}>Ventures For You</Text>
		</View>
		<View style={styles.venturesRow}>
			<VenturesCard 
				backgroundPic={require("../../assets/images/ventures/minimal_home_ventures.jpg")} 
				cardTitle={"Declutter Your Home"} 
				altTextColorIsStart={true} 
				cardTitleAltColor = {"#7CD1BD"}
				percentComplete={0.75}
			/>
				<VenturesCard 
					backgroundPic={require("../../assets/images/ventures/digital_minimalism_venture.jpg")}
					cardTitle={"Digital Minimalism"} 
					altTextColorIsStart={true} 
					cardTitleAltColor = {"#C2CAF2"}
					percentComplete={0.3}
				/>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
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