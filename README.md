# react-native-looped-scroll-timepicker

<img src="https://github.com/illi-homz/demos/blob/main/react-native-looped-scroll-timepicker.gif?raw=true" height="350">
<br>

## Installation
Using NPM:
```
$ npm i react-native-looped-scroll-timepicker
```

Using Yarn:
```
$ yarn add react-native-looped-scroll-timepicker
```

## Usage
```javascript
import { LoppedScrollTimepicker } from 'react-native-looped-scroll-timepicker'
```

```javascript
<LoppedScrollTimepicker
  onSelect={t => setTime(t)}
  onInit={t => setTime(t)}
  style={styles.picker}
/>
```

### Types

```ts
type LoppedScrollTimepickerProps = {
  itemsCount?: number;
  centerIdx?: number;
  hours?: any[];
  minutes?: any[];
  initSelect?: boolean;
  ItemComponent?: React.FC<TimePickerItemProps>;
  style?: StyleProp<ViewStyle>;
  timeFaceStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemActiveStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<ViewStyle>;
  itemActiveTextStyle?: StyleProp<ViewStyle>;
  onSelect?(time: string): void;
  onInit?(time: string): void;
};

type TimePickerItemProps = {
  item: any;
  isActive?: boolean;
  textActiveScale?: number;
  textActiveColor?: string;
  style?: StyleProp<ViewStyle>;
  activeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<ViewStyle>;
};
```

<br>

## Authors

- [Ilya Gomza](https://github.com/illi-homz/)