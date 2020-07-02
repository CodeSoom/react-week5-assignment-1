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

export const setCategories = (categoreis) => ({
  type: 'setCategories',
  payload: categoreis,
});

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: regions,
});
