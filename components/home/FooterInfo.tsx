import React from 'react';
import { StyleSheet, ImageBackground, useColorScheme } from 'react-native';

import { Entypo } from '@expo/vector-icons'; 

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function FooterInfo() {

  const colorScheme = useColorScheme();

  return (
	<View style={styles.FooterInfoContainer}>
		<View style = {styles.FooterHeaderContainer}>
			<Text style = {styles.FooterInfoHeader}>Quote of the Day</Text> 
			<Entypo name="quote" size={24} style={{marginLeft: 10, color: Colors[colorScheme ?? 'light'].text}} />
		</View>
		<Text style = {[styles.FooterInfoText, {color: Colors[colorScheme ?? 'light'].text, }]}>"Freedom is not achieved by satisfying desire, but by eliminating it."</Text>
	</View>
  );
}

const styles = StyleSheet.create({
	FooterInfoContainer: {
		borderRadius: 30,
		flex: .5,
		marginBottom: "3%",
		marginRight: '5%',
		marginLeft: '5%',
	},
	FooterInfoHeader: {
		fontSize: 20,
		textAlign: 'left',
	},
	FooterInfoText: {
		fontSize: 15,
		textAlign: 'left',
		fontStyle: 'italic',
		marginTop: '1%',
	},
	FooterHeaderContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
  });