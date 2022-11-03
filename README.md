# react-native-ios-haptics

<img src="https://user-images.githubusercontent.com/59441376/199842774-c1f758d8-b298-4764-bbaa-908d3e4bc9d2.png" width="400px" />

this native module helps you achieve the notification and the impact haptics(vibration) feedbacks with the latest types and styles.

## Installation

```sh
npm install react-native-ios-haptics
```

## Usage

```js
import { notificationFeedback, impactFeedback } from 'react-native-ios-haptics';

// ...

notificationFeedback('success');
impactFeedback('soft');
```

## Feedbacks

| Impact        | Notifications |
| ------------- | ------------- |
| soft          | success       |
| light         | warning       |
| medium        | error         |
| rigid         |               |
| heavy         |               |               

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
