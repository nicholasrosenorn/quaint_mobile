import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather, Octicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import TimelineItem from './TimelineItem';

export default function HomeFooter() {
	const colorScheme = useColorScheme();
	return (
		<View style={styles.FooterContainer}>
			<View style={styles.FooterHeader}>
				<Text style={styles.HeaderText}>Week at a Glance</Text>
				</View>
			<View style={styles.TimelineContainer}>
				<TimelineItem day="Sun" isCompleted={true}/>
				<TimelineItem day="Mon" isCompleted={true}/>
				<TimelineItem day="Tue" isCompleted={true}/>
				<TimelineItem day="Wed"/>
				<TimelineItem day="Thu"/>
				<TimelineItem day="Fri"/>
				<TimelineItem day="Sat"/>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	FooterContainer: {
		marginHorizontal: 10,
		marginTop: 10,
	},
	FooterHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	HeaderText: {
		fontSize: 16,
		textAlign: 'left',
		fontWeight: '600',
    	color: '#9e9e9e',
	},
	TimelineContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1
	}

  });