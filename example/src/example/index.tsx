import React from 'react';
import {
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  Text,
  Vibration,
} from 'react-native';
import { notificationFeedback, impactFeedback } from 'react-native-ios-haptics';
import { notificationFeedbackList, impactFeedbackList } from './constants';

export const Example = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          Vibration.vibrate();
        }}
      >
        <Text>React Native Vibration</Text>
      </TouchableHighlight>
      <Text> ------- Notifiation Feedback ------- </Text>
      {notificationFeedbackList.map((item) => (
        <TouchableHighlight
          style={styles.button}
          key={item.id}
          onPress={() => {
            notificationFeedback(item.type);
          }}
        >
          <Text>{item.title}</Text>
        </TouchableHighlight>
      ))}
      <Text> ------- Impact Feedback ------- </Text>
      {impactFeedbackList.map((item) => (
        <TouchableHighlight
          style={styles.button}
          key={item.id}
          onPress={() => {
            impactFeedback(item.type);
          }}
        >
          <Text>{item.title}</Text>
        </TouchableHighlight>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    margin: 15,
    borderRadius: 5,
    backgroundColor: 'green',
  },
});
