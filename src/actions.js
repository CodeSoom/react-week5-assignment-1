export const intializeSelectButtons = () => ({
  type: 'intializeSelectButtons',
});

export const setSelectInfo = ({ type, value }) => ({
  type: 'setSelectInfo',
  payload: { type, value },
});
