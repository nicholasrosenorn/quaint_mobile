import React from 'react';
import { StyleSheet, ImageBackground, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import minimal_home from '../../assets/images/quill3.png';

export default function HeaderInfo() {
  return (
	<View style={styles.HeaderInfoContainer}>
			<Text style = {styles.HeaderInfoHeader}>Quaint</Text>
			<Text style = {styles.HeaderInfoText}>health and wellness through minimalism</Text>
	</View>
  );
}

const styles = StyleSheet.create({
	HeaderInfoContainer: {
		flex: 1,
		marginTop: '3%',
		marginBottom: '1%',
		marginLeft: '5%',
	},
	HeaderInfoHeader: {
		fontSize: 30,
		textAlign: 'left',
	},
	HeaderInfoText: {
		fontSize: 15,
		textAlign: 'left',
		fontStyle: 'italic',
	},
	imageContainer:{
		flex: 1,
	},
	image: {
		opacity: 0.22,
		borderRadius: 30,
	  },
  });
  