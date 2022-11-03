import { NativeModules, Platform } from 'react-native';
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
  HapticsManager.notificationFeedback(type);
};

const impactFeedback = (type: HapticsImpactTypes) => {
  HapticsManager.impactFeedback(type);
};

export { notificationFeedback, impactFeedback };
