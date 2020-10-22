export const intializeSelectButtons = () => ({
  type: 'intializeSelectButtons',
});

export const setSelectedButton = ({ type, value }) => ({
  type: 'setSelectedButton',
  payload: { type, value },
});
