import { getDefaultMinutes, repeatArray } from "./utils";

export const defaultItemsCount = 5;
export const defaultCurrentIndex = Math.trunc(defaultItemsCount / 2);
export const defaultHours = new Array(24).fill(null).map((_, idx) => {
  if (idx.toString().length === 1) {
    return '0' + idx;
  }

  return idx.toString();
});

export const defaultMinutes = getDefaultMinutes(30).map(item => {
  if (item.toString().length === 1) {
    return '0' + item;
  }

  return item.toString();
});

export const repeatedDefaultMinutes = repeatArray(defaultMinutes, 5)
