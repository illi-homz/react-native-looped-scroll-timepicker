import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type InfinityScrollTimepickerProps = {
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
  itemTextStyle?: StyleProp<TextStyle>;
  itemActiveTextStyle?: StyleProp<TextStyle>;
  scaleItemDuration?: number;
  textActiveColor?: string;
  textActiveScale?: number;
  onSelect?(time: string): void;
  onInit?(time: string): void;
};

export type TimePickerItemProps = {
  item: any;
  isActive?: boolean;
  scaleItemDuration?: number;
  textActiveScale?: number;
  textActiveColor?: string;
  style?: StyleProp<ViewStyle>;
  activeStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
};
