import { StyleSheet, TextInput, useColorScheme } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import Colors from '../constants/Colors';

export default function NewPostForm() {
  const colorScheme = useColorScheme();
  return (
	<View style={styles.container}>
		<TextInput
			style={styles.textInput}
			placeholder="Whats on your mind..." 
			numberOfLines={10}
			placeholderTextColor="#ccc"
			multiline={true}
			/>
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
		textAlignVertical: 'top',
		color: '#ccc',
	},
});