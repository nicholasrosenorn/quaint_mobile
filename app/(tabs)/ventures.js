import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { Link } from 'expo-router';

import Colors from '../../constants/Colors';

import { Text, View, ScrollView } from '../../components/Themed';
import VenturesCard from '../../components/Ventures/VenturesCard';
import VenturesHeader from '../../components/Ventures/VenturesHeader';
import VenturesBody from '../../components/Ventures/VenturesBody';

export default function ventures(){
  return (
	<ScrollView style={styles.container}>
		<VenturesHeader />
		<VenturesBody />
	</ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
  VentureBox: {
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth: 1,
	height: 180,
	width: "41%",
	borderRadius: 20,
},
TempRow: {
	flexDirection: 'row',
	justifyContent: 'space-around',
	marginTop: "3%",
  }
});
