export type HapticsNotificationTypes = 'error' | 'warning' | 'success';
export type HapticsImpactTypes =
  | 'soft'
  | 'light'
  | 'medium'
  | 'rigid'
  | 'heavy';

export type ImpactItemType = {
  id: number;
  title: string;
  type: HapticsImpactTypes;
};

export type NotificationFeedbackListType = {
  id: number;
  title: string;
  type: HapticsNotificationTypes;
};
