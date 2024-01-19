import React, { useState, useEffect }  from 'react';
import { StyleSheet, ImageBackground, useColorScheme, TouchableOpacity, Alert, Image } from 'react-native';
import { Link } from 'expo-router';

import Colors from '../constants/Colors';

import { Text, View, ScrollView } from '../components/Themed';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileBody from '../components/Profile/ProfileBody';
import NewPostButton from '../components/Social/NewPostButton';

export default function Profile(){
  return (
	<View style={{flex: 1}}>
		<ScrollView style={styles.container}>
			<ProfileHeader />
			<ProfileBody />
		</ScrollView>
		<NewPostButton />
	</View>
  )
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
  },
});