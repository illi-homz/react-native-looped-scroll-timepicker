import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TimePickerItem from './TimePickerItem';
import { defaultHours, defaultMinutes } from './data';
import { InfinityScrollTimepickerProps } from './types';
import { repeatArray } from './utils';
import { InfinityScrollView } from 'react-native-infinity-scroll-view';
import { RenderItemValueType } from 'react-native-infinity-scroll-view/src/types';

const InfinityScrollTimepicker: React.FC<InfinityScrollTimepickerProps> = ({
  hours = defaultHours,
  minutes = defaultMinutes,
  itemsCount = 5,
  centerIdx = 2,
  style,
  timeFaceStyle,
  initSelect = true,
  ItemComponent = TimePickerItem,
  itemTextStyle,
  itemActiveTextStyle,
  itemStyle,
  itemActiveStyle,
  onSelect,
  onInit,
}) => {
  const isInit = useRef(false);
  const [activeHourIdx, setActiveHourIdx] = useState<number | undefined>();
  const [activeMinutesIdx, setActiveMinutesIdx] = useState<
    number | undefined
  >();

  const repeatedtHours = useMemo(() => {
    if (hours.length > itemsCount + 2) {
      return hours;
    }

    return repeatArray(hours, Math.ceil((itemsCount + 2) / hours.length));
  }, [minutes]);

  const repeatedtMinutes = useMemo(() => {
    if (minutes.length > itemsCount + 2) {
      return minutes;
    }

    return repeatArray(minutes, Math.ceil((itemsCount + 2) / minutes.length));
  }, [minutes]);

  useEffect(() => {
    if (
      activeHourIdx !== undefined &&
      activeMinutesIdx !== undefined &&
      !isInit.current &&
      initSelect
    ) {
      onInit?.(
        `${repeatedtHours[activeHourIdx]}:${repeatedtMinutes[activeMinutesIdx]}`,
      );
      isInit.current = true;
    }
  }, [activeHourIdx, activeMinutesIdx]);

  const saveHour = (items?: RenderItemValueType[]) => {
    if (!items) return;

    const currentIndex = items[centerIdx].index;
    setActiveHourIdx(currentIndex);

    if (activeMinutesIdx) {
      onSelect?.(
        `${repeatedtHours[currentIndex]}:${repeatedtMinutes[activeMinutesIdx]}`,
      );
    }
  };

  const saveMinutes = (items?: RenderItemValueType[]) => {
    if (!items) return;

    const currentIndex = items[centerIdx].index;
    setActiveMinutesIdx(currentIndex);

    if (activeHourIdx) {
      onSelect?.(
        `${repeatedtHours[activeHourIdx]}:${repeatedtMinutes[currentIndex]}`,
      );
    }
  };

  return (
    <View style={[styles.container, style]}>
      <InfinityScrollView
        data={repeatedtHours}
        renderItem={({ item, index }) => {
          return (
            <ItemComponent
              item={item}
              isActive={activeHourIdx === index}
              textStyle={itemTextStyle}
              activeTextStyle={itemActiveTextStyle}
              style={itemStyle}
              activeStyle={itemActiveStyle}
            />
          );
        }}
        vivableCount={5}
        pagingEnabled
        onInit={initSelect ? saveHour : undefined}
        onScrollEnd={saveHour}
        onScrollStart={() => {
          setActiveHourIdx(undefined);
        }}
        style={[styles.timeFace, timeFaceStyle]}
      />

      <InfinityScrollView
        data={repeatedtMinutes}
        renderItem={({ item, index }) => {
          return (
            <ItemComponent
              item={item}
              isActive={activeMinutesIdx === index}
              textStyle={itemTextStyle}
              activeTextStyle={itemActiveTextStyle}
              style={itemStyle}
              activeStyle={itemActiveStyle}
            />
          );
        }}
        onInit={initSelect ? saveMinutes : undefined}
        vivableCount={5}
        pagingEnabled
        onScrollEnd={saveMinutes}
        onScrollStart={() => {
          setActiveMinutesIdx(undefined);
        }}
        style={[styles.timeFace, timeFaceStyle]}
      />
    </View>
  );
};

export default memo(InfinityScrollTimepicker);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 300,
  },
  timeFace: {
    height: '100%',
    flex: 1,
  },
});
