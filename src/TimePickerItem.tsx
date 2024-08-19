import React, { useEffect } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { colors } from './colors';
import { TimePickerItemProps } from './types';

const TimePickerItem: React.FC<TimePickerItemProps> = ({
  item,
  isActive,
  textActiveScale = 1.3,
  textActiveColor = colors.text,
  style,
  activeStyle,
  textStyle,
  activeTextStyle,
  scaleItemDuration = 100
}) => {
  const scale = useSharedValue(1);
  const color = useSharedValue(colors.text05);
  const noActiveColor = textStyle?.color || colors.text05

  useEffect(() => {
    scale.value = withSpring(isActive ? textActiveScale : 1, { duration: scaleItemDuration });
    color.value = withTiming(isActive ? textActiveColor : noActiveColor, {
      duration: scaleItemDuration,
    });
  }, [isActive]);

  return (
    <View style={[styles.item, style, isActive && activeStyle]}>
      <Animated.Text
        style={[styles.text, textStyle, isActive && activeTextStyle, { color, transform: [{ scale }] }]}>
        {item}
      </Animated.Text>
    </View>
  );
};

export default TimePickerItem;


const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: colors.text05,
    fontWeight: '700',
  },
});
