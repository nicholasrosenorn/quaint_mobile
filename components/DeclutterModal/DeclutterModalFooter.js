import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';



export default function DeclutterModalFooter() {
  const colorScheme = useColorScheme();
  return (
	<View style={styles.DeclutterModalFooterContainer}>
		<View style = {styles.ButtonRow}>
	
			<Link href="../" asChild>
				<TouchableOpacity>
					<View style = {styles.CompleteTaskButton}>
						<Text style={styles.CompleteButtonText}>Complete Task</Text>
					</View>
				</TouchableOpacity>
			</Link>
				<View style = {styles.NewTaskButton}>
					<TouchableOpacity >
						<Text style={{color: Colors[colorScheme ?? 'light'].text}}>Generate a new daily declutter?</Text>
					</TouchableOpacity>
				</View>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	DeclutterModalFooterContainer: {
		flex: .25,
		marginHorizontal: 10,
		justifyContent: 'center',
		marginTop: "10%",
	},
	ButtonRow: {
		flex: 1,
	},
	NewTaskButton: {
		padding: 10,
		alignItems: 'center',

	},
	CompleteTaskButton: {
		backgroundColor: "#8590C8",
		borderRadius: 10,
		padding: 10,
		alignItems: 'center',
	},
	CompleteButtonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
});