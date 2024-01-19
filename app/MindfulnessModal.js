import { StyleSheet } from 'react-native';
import React, { useState, useEffect }  from 'react';

import { Text, View } from '../components/Themed';
import MindfulnessModalHeader from '../components/MindfulnessModal/MindfulnessModalHeader';
import MindfulnessModalBody from '../components/MindfulnessModal/MindfulnessModalBody';
import MindfulnessModalFooter from '../components/MindfulnessModal/MindfulnessModalFooter';


export default function DeclutterModal() {

	return (
		<View style={styles.container}>
			<MindfulnessModalHeader />
			<MindfulnessModalBody />
			<MindfulnessModalFooter />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	  },
  });