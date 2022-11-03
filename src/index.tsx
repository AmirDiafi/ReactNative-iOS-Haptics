import { Alert, NativeModules, Platform } from 'react-native';
import type { HapticsImpactTypes, HapticsNotificationTypes } from './types';

const LINKING_ERROR =
  `The package 'react-native-ios-haptics' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const HapticsManager = NativeModules.HapticsManager
  ? NativeModules.HapticsManager
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const notificationFeedback = (type: HapticsNotificationTypes) => {
  if (Platform.OS === 'ios') {
    HapticsManager.notificationFeedback(type);
  } else {
    Alert.alert('This is not supported for Android yet');
  }
};

const impactFeedback = (type: HapticsImpactTypes) => {
  if (Platform.OS === 'ios') {
    HapticsManager.impactFeedback(type);
  } else {
    Alert.alert('This is not supported for Android yet');
  }
};

export { notificationFeedback, impactFeedback };
