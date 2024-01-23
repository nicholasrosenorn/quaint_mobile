import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, Feather, EvilIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';


export default function HistoryCard({topic, date, textColor, backgroundPic}) {
  const colorScheme = useColorScheme();
  return (
	<View style={styles.container}>
		<View style={styles.historyCardRow}>
			<View style={styles.timelineContainer}>
					{/*<Entypo name="flow-line" size={35} color="#9e9e9e" />*/}
					<Entypo name="dots-two-vertical" size={28} color="#9e9e9e" />
					<Ionicons name="checkmark-circle-outline" size={28} color="#9e9e9e" />
					<Entypo name="dots-two-vertical" size={28} color="#9e9e9e" />
			</View>
			<TouchableOpacity style={styles.historyCard}>
				<ImageBackground source={backgroundPic} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>	
					<View style={styles.HistoryCardTitle}>
                        <Text style={[styles.HistoryCardTitleText, {color: textColor}]}>{topic}</Text>
                        <Text style={styles.HistoryCardDateText}>Decluttered on {date}</Text>
                    </View>
                    <View style={styles.arrow}>
                        <Feather name="chevron-right" size={24} color="#fff" />
                    </View>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 80,
	},
	historyCardRow: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	historyCard: {
		borderRadius: 15,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
		height: 70,
	},
	timelineContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		flex:.15,
	},
	HistoryCardTitle: {
		backgroundColor: null,
		justifyContent: 'flex-start',
	},
	HistoryCardTitleText: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginTop: 10,
	},
	HistoryCardDateText: {
		fontSize: 15,
		color: "#fff",
		marginLeft: 10,
	},
	arrow: {
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: null,
		marginRight: 10,
	},
	imageContainer:{
		backgroundColor: "#191919",
		borderRadius: 15,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	image: {
		opacity: 0.15,
		borderRadius: 15,
	  },
});