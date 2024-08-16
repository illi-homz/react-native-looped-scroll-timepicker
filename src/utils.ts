export const getDefaultMinutes = (interval: number) => {
  return new Array(Math.round(60 / interval))
    .fill(null)
    .map((_, idx) => idx * interval);
};

export const repeatArray = (array: any[], count = 1) => {
  return new Array(count)
    .fill(array)
    .reduce((acc, list) => [...acc, ...list], []);
};
