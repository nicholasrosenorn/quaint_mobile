import { StyleSheet } from 'react-native';
import React, { useState, useEffect }  from 'react';

import { Text, View } from '../components/Themed';
import DeclutterModalHeader from '../components/DeclutterModal/DeclutterModalHeader';
import DeclutterModalBody from '../components/DeclutterModal/DeclutterModalBody';
import DeclutterModalFooter from '../components/DeclutterModal/DeclutterModalFooter';


export default function DeclutterModal() {

	return (
		<View style={styles.container}>
			<DeclutterModalHeader />
			<DeclutterModalBody />
			<DeclutterModalFooter />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	  },
  });