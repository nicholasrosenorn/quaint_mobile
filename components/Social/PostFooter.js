import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
      <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={20}
        color={liked ? "red" : Colors[colorScheme ?? 'light'].text}
      />
    </Pressable>
  );
};

export default function PostFooter({numLikes, numComments}) {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
	<View style={styles.container}>
		<View style={styles.numsContainer}>
			<View style={styles.likesRow}>
				<LikeButton />
				<Text> {numLikes} likes</Text>
			</View>
			<TouchableOpacity style={styles.likesRow} onPress={() => {router.push("/Comments")}}>
				<MaterialCommunityIcons name="comment-text-outline" size={20} color={Colors[colorScheme ?? 'light'].text} />	
				<Text> {numComments} comments</Text>
			</TouchableOpacity>
		</View>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: .2,
		marginBottom: 10,
	},
	numsContainer: {
		marginTop: 10,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	likesRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});