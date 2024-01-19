import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import HeaderInfo from '../components/AboutModal/HeaderInfo';
import BodyInfo from '../components/AboutModal/BodyInfo';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <BodyInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
