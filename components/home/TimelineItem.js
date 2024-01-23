import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, Feather, EvilIcons, Octicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';


export default function TimelineItem({day, isCompleted}) {
  const colorScheme = useColorScheme();
  if (isCompleted) {
	  return (
		<View style={styles.container}>
			<View style={styles.TimerineRow}>
				<Ionicons name="checkmark-circle" size={24} color="#7CD1BD" />
			</View>
			<Text style={{color:"#7CD1BD"}}>{day}</Text>
		</View>
	  )
  } else {
  return (
	<View style={styles.container}>
		<View style={styles.TimerineRow}>
			<Ionicons name="checkmark-circle-outline" size={24} color="#9e9e9e" />
		</View>
		<Text style={{color:"#9e9e9e"}}>{day}</Text>
	</View>
  )
  }
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	TimerineRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1
	}
});