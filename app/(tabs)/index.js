import { StyleSheet } from 'react-native';
import React, { useState, useEffect }  from 'react';

import { Text, View, ScrollView } from '../../components/Themed';

import HomeHeader from '../../components/home/HomeHeader';
import HomeBody from '../../components/home/HomeBody';
import HomeFooter from '../../components/home/HomeFooter';

export default function Home() {
  const [isCompletedTask, setIsCompletedTask] = useState([false, false, false]);
  const [buttonState, setButtonState] = useState(0);
  //setButtonState(countTrue(isCompletedTask));
  return (
    <ScrollView style={styles.container}>
      <HomeHeader/>
      <HomeBody />
      <HomeFooter />
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
