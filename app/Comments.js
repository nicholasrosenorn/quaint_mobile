import { StyleSheet, TextInput, useColorScheme, TouchableOpacity } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import Colors from '../constants/Colors';
import Post from '../components/Social/Post';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Comment from '../components/Social/Comment';

export default function Comments() {
  const colorScheme = useColorScheme();
  return (
	<ScrollView style={styles.container} automaticallyAdjustKeyboardInsets={true}>
		<Post/>
		<View style={styles.CommentContainer}>
			{/* Add Comments here*/}
			<Comment/>
			<Comment/>
			<Comment/>
		</View>
		<View style={styles.textInputContainer}>
			<TextInput
				style={[styles.textInput, {color: Colors[colorScheme ?? 'light'].text}]}
				placeholder="Add a Comment..." 
				numberOfLines={10}
				placeholderTextColor="#ccc"
				multiline={true}
				/>
			<TouchableOpacity>
				<MaterialCommunityIcons name="send-circle-outline" size={28} color={Colors[colorScheme ?? 'light'].text} />	
			</TouchableOpacity>
		</View>
	</ScrollView>
  )
}

styles = StyleSheet.create({
	container: {

	},
	textInput: {
		marginHorizontal: 10,
		marginVertical: 10,
		padding: 10,
		borderRadius: 12,
		backgroundColor: '#eee', 
		alignItems: 'center',
		width: '88%',
	}, textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
		marginHorizontal: 10,
	}, 
});