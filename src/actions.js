export const intializeSelectButtons = ({ regions, categories }) => ({
  type: 'intializeSelectButtons',
  payload: { regions, categories },
});

export const setSelectedButton = ({ type, value }) => ({
  type: 'setSelectedButton',
  payload: { type, value },
});

export const intializeSelectButtonsAsync = () => async (dispatch) => {
  const regions = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
  const categories = await fetch('https://eatgo-customer-api.ahastudio.com/categories');

  dispatch(intializeSelectButtons({ regions, categories }));
};
