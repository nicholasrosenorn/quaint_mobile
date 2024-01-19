import { StyleSheet, TextInput, useColorScheme } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import Colors from '../constants/Colors';

import Tag from '../components/Social/Tag';

export default function Search() {
  const colorScheme = useColorScheme();
  // TODO: FIX TEXT COlOR FOR DARK MODE AND REMOVE BORDER
  return ( 
	<View style={styles.container} automaticallyAdjustKeyboardInsets={true}>
		<TextInput
			style={[styles.textInput, {color: Colors[colorScheme ?? 'light'].text}]}
			placeholder="Search..." 
			numberOfLines={10}
			placeholderTextColor="#ccc"
			/>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<View style={styles.TagSearchHeader}>
				<Text style={styles.TagHeader}>Explore Tags</Text> 
			</View>
			<View style={styles.TagContainer}>
				<Tag tag="Minimalism"/>
				<Tag tag="Mindfulness"/>
				<Tag tag="Environmentalism"/>
				<Tag tag="Home"/>
				<Tag tag="Intentional Living"/> 
				<Tag tag="Digital"/>
				<Tag tag="Books"/>
				<Tag tag="Health and Wellness"/>
			</View> 
	</View>
  )
}

styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		marginHorizontal: 10,
		marginVertical: 10,
		padding: 10,
		borderRadius: 15,
		height: 40,
		alignItems: 'center',
	},
	TagSearchHeader: {
		marginHorizontal: 10,
		marginVertical: 20,
	},
	TagHeader: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	TagContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: 10,
	},
	separator: {
		height: 1,
	  },
});