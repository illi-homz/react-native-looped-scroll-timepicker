# react-native-infinity-scroll-timepicker

<img src="https://github.com/illi-homz/demos/blob/main/react-native-infinity-scroll-timepicker.gif?raw=true" height="350">
<br>

## Installation
Using NPM:
```
$ npm i react-native-infinity-scroll-timepicker
```

Using Yarn:
```
$ yarn add react-native-infinity-scroll-timepicker
```

## Usage
```javascript
import { InfinityScrollTimepicker } from 'react-native-infinity-scroll-timepicker'
```

```javascript
<InfinityScrollTimepicker
  onSelect={t => setTime(t)}
  onInit={t => setTime(t)}
  style={styles.picker}
/>
```

### Types

```ts
type InfinityScrollTimepickerProps = {
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