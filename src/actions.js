import check from './utils';

const setRegions = (regions) => ({
  type: 'setRegions',
  payload: { regions },
});

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: { categories },
});

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: { restaurants },
});

const checkRegion = (id) => ({
  type: 'checkRegion',
  payload: { id },
});

const checkCategory = (id) => ({
  type: 'checkCategory',
  payload: { id },
});

const updateRegions = (id) => (dispatch, getState) => {
  const { regions } = getState();
  const checkedRegions = regions.map((region) => check(region, id));
  dispatch(setRegions(checkedRegions));
  dispatch(checkRegion(id));
};

const updateCategories = (id) => (dispatch, getState) => {
  const { categories } = getState();
  const checkedCategories = categories.map((category) => check(category, id));
  dispatch(setCategories(checkedCategories));
  dispatch(checkCategory(id));
};

export {
  setRegions, setCategories, setRestaurants, checkRegion, checkCategory,
  updateRegions, updateCategories,
};
