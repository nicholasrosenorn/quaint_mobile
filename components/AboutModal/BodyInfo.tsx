import React from 'react';
import { StyleSheet, useColorScheme, Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function BodyInfo() {
  const colorScheme = useColorScheme();
  return (
	<View style={styles.HeaderInfoContainer}>
		<View style={styles.InfoContainer}>
			<Text style={styles.title}>About Quaint 🙂</Text>
			<Text>Our mission at Quaint is to use evidence-based practices of minimalism to help our users towards personal-growth and intentional-living. We are team of minimalists and developers who are passionate about reducing the barrier of entry to minimalism.</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<Text style={styles.title}>Website and Newsletter 🖥</Text>
			<Text>Beyond just this app, Quaint has a team of minimalists and writers who publish new ideas, tips, and opinions to our website and newsletter at <ExternalLink href="https://www.quaint.social/" style={{color: "#3366CC"}}>https://www.quaint.social/</ExternalLink>.</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<Text style={styles.title}>Contact Us! 📧</Text>
			<Text>We have a lot of features to add to this app in the near future, but we would LOVE your feedback and suggestions!! For any questions, comments, or concerns, please email us at <ExternalLink href="mailto:quaintsocial@gmail.com" style={{color: "#3366CC"}}>quaintsocial@gmail.com</ExternalLink>. We promise to reply within 24 hours.</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		</View>
		<View style={styles.socialsView}>
			<ExternalLink href="https://www.instagram.com/quaintsocial/" style={{color: "#3366CC"}}><Entypo name="instagram-with-circle" size={30} color={Colors[colorScheme ?? 'light'].tabIconDefault} href="https://www.instagram.com/quaintsocial/"/></ExternalLink>
			<Entypo name="facebook-with-circle" size={30} color={Colors[colorScheme ?? 'light'].tabIconDefault} />
			<Entypo name="twitter-with-circle" size={30} color={Colors[colorScheme ?? 'light'].tabIconDefault} />
			<Entypo name="linkedin-with-circle" size={30} color={Colors[colorScheme ?? 'light'].tabIconDefault} />
			<Entypo name="youtube-with-circle" size={30} color={Colors[colorScheme ?? 'light'].tabIconDefault} />
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
	HeaderInfoContainer: {
		flex: 1,
		marginTop: '10%',
		marginBottom: '1%',
	},
	InfoContainer: {
		marginLeft: '5%',
		marginRight: '5%',
	},
	  title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: '1%',
		marginBottom: '1%',
	  },
	  separator: {
		marginVertical: 30,
		height: 1,
	  },
	  socialsView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: '7%',
	  }
  });
  