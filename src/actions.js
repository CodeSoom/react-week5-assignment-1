export const intializeSelectButtons = ({ regions, categories }) => ({
  type: 'intializeSelectButtons',
  payload: { regions, categories },
});

export const setSelectedButton = ({ type, value }) => ({
  type: 'setSelectedButton',
  payload: { type, value },
});
