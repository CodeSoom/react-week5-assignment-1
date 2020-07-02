export const changeRegion = ({ name }) => ({
  type: 'changeRegion',
  payload: {
    name,
  },
});

export const changeCategory = ({ name }) => ({
  type: 'changeCategory',
  payload: {
    name,
  },
});
