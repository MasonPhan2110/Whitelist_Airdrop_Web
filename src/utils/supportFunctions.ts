export const stripVal = (val: string, start = 6, end = 4) => {
  return val
    ? `${val.slice(0, start)}...${val.slice(val.length - end, val.length)}`
    : '';
};
