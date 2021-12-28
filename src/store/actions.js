export const ACTION_TYPES = {
  SET_REGIONS: 'SET_REGIONS',
  SET_CATEGORIES: 'SET_CATEGORIES',
};

export function setRegions(regions) {
  return {
    type: ACTION_TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function fetchRegions() {
  return async (dispatch) => {
    const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
    const regions = await response.json();
    dispatch(setRegions(regions));
  };
}

export function setCategories(categories) {
  return {
    type: ACTION_TYPES.SET_CATEGORIES,
    payload: { categories },
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    const response = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
    const categories = await response.json();
    dispatch(setCategories(categories));
  };
}
