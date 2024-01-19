import React, {useState, useEffect} from 'react';
import { StyleSheet, ImageBackground, useColorScheme, Platform, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ExternalLink } from '../ExternalLink';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

const postText = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nisl nisl ultricies nisl, vitae aliqua, consectetur adipiscing elit psum dolor sit amet nisl nisl ultricies lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nisl nisl ultricies nisl, vitae aliqua, consectetur adipiscing elit psum dolor sit amet nisl nisl ultricies"

export default function Post() {
  const colorScheme = useColorScheme();
  return (
	<View style={[styles.container, {borderBottomColor: "#ccc", borderBottomWidth: .5}]}>
		<PostHeader username="Username" date="Dec 10 at 8:32 AM" />
		<PostBody postText={postText} />
		<PostFooter numLikes={10} numComments={5} />
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 4,
	}
});