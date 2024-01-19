import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, ScrollView } from '../../components/Themed';
import Post from '../../components/Social/Post';
import NewPostButton from '../../components/Social/NewPostButton';

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1}}>
      <ScrollView style={styles.container}>
        {/* TODO - Change this to a flatlist */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
      <NewPostButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
