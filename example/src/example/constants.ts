import type { ImpactItemType, NotificationFeedbackListType } from 'src/types';

const notificationFeedbackList: NotificationFeedbackListType[] = [
  {
    id: 0,
    type: 'error',
    title: 'Error',
  },
  {
    id: 1,
    type: 'warning',
    title: 'Warning',
  },
  {
    id: 2,
    type: 'success',
    title: 'Success',
  },
];

const impactFeedbackList: ImpactItemType[] = [
  {
    id: 0,
    type: 'soft',
    title: 'Soft',
  },
  {
    id: 1,
    type: 'rigid',
    title: 'Rigid',
  },
  {
    id: 2,
    type: 'heavy',
    title: 'Heavy',
  },
  {
    id: 3,
    type: 'medium',
    title: 'medium',
  },
  {
    id: 4,
    type: 'light',
    title: 'Light',
  },
];

export { notificationFeedbackList, impactFeedbackList };
