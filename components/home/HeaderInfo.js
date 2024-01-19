import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';


import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

function countTrue(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i]) {
		count = count + 33;
	  }
	}
	return count;
  }


export default function HeaderInfo({buttonState, setButtonState, isCompletedTask}) {
  const colorScheme = useColorScheme();

  // found here: https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  useEffect(() => {
    setButtonState(countTrue(isCompletedTask));
  }, [isCompletedTask]);

  return (
	<View style={styles.HeaderInfoContainer}>
		{/*<ImageBackground source={minimal_home} resizeMode="cover" style = {styles.imageContainer} imageStyle={styles.image}>
			<Text style = {styles.HeaderInfoHeader}>Quaint</Text>
			<Text style = {styles.HeaderInfoText}>health and wellness through minimalism</Text>
  </ImageBackground>*/}
		<CircularProgress
			value={buttonState}
			duration={800}
			radius={60}
			title={Math.round(buttonState/33)+'/3'}
			titleStyle={{fontWeight: '300', fontSize: 30, color: Colors[colorScheme ?? 'light'].text}}
			activeStrokeColor={'#8590C8'}
			activeStrokeSecondaryColor={'#6472b9'} //-- for gradient
			inActiveStrokeColor={'#C2CAF2'}
			inActiveStrokeOpacity={0.2}
			inActiveStrokeWidth={15}
			activeStrokeWidth={15}


			showProgressValue={false}
		/>
	</View>
  );
}

const styles = StyleSheet.create({
	HeaderInfoContainer: {
		borderRadius: 30,
		flex: .7,
		marginTop: '3%',
		marginBottom: '1%',
	},
	HeaderInfoHeader: {
		fontSize: 30,
		textAlign: 'left',
		marginLeft: '5%',
		color: 'white',
	},
	HeaderInfoText: {
		fontSize: 15,
		textAlign: 'left',
		marginLeft: '5%',
		fontStyle: 'italic',
		color: 'white',
	},
	imageContainer:{
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		opacity: 0.22,
		borderRadius: 30,
	  },
  });
  