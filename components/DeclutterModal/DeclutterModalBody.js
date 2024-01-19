import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien. Morbi blandit cursus risus at ultrices mi. Cum sociis natoque penatibus et magnis dis. Mattis enim ut tellus elementum sagittis. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Augue neque gravida in fermentum et sollicitudin ac orci. Sed cras ornare arcu dui. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Nulla facilisi nullam vehicula ipsum a arcu cursus. Adipiscing diam donec adipiscing tristique risus nec feugiat. Risus sed vulputate odio ut enim. Aliquet enim tortor at auctor urna nunc. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Consectetur adipiscing elit ut aliquam. Ornare quam viverra orci sagittis eu. Pharetra vel turpis nunc eget lorem. Vel eros donec ac odio tempor orci dapibus ultrices in. Velit egestas dui id ornare arcu odio. Gravida neque convallis a cras semper auctor neque. Velit sed ullamcorper morbi tincidunt. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Elementum curabitur vitae nunc sed velit dignissim sodales. Sagittis vitae et leo duis ut diam quam nulla. Amet dictum sit amet justo donec enim ";

export default function DeclutterModalBody() {
  return (
	<View style={styles.DeclutterModalBodyContainer}>
		<Text style={styles.DeclutterModalBodyHeader}>TOPIC</Text>
		<Text>{loremIpsum}</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	DeclutterModalBodyContainer: {
		flex: 1,
		marginHorizontal: 10,
	},
	DeclutterModalBodyHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
});