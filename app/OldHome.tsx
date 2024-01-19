import { StyleSheet } from 'react-native';
import React, { useState, useEffect }  from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import HeaderInfo from '../components/home/HeaderInfo';
import FooterInfo from '../components/home/FooterInfo';
import BodyInfo from '../components/home/BodyInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  const [isCompletedTask, setIsCompletedTask] = useState([false, false, false]);
  const [buttonState, setButtonState] = useState(0);
  //setButtonState(countTrue(isCompletedTask));
  return (
    <View style={styles.container}>
      <HeaderInfo buttonState={buttonState} setButtonState={setButtonState} isCompletedTask={isCompletedTask}/>
      <BodyInfo isCompletedTask={isCompletedTask} setIsCompletedTask={setIsCompletedTask}/>
      <FooterInfo />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
