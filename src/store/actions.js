export const ACTION_TYPES = {
  SET_REGIONS: 'SET_REGIONS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_FILTER: 'SET_FILTER',
  SET_RESTAURANTS: 'SET_RESTAURANTS',
};

export function setFilter({ region, category }) {
  return {
    type: ACTION_TYPES.SET_FILTER,
    payload: { region, category },
  };
}

export function setRegions(regions) {
  return {
    type: ACTION_TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function fetchRegions() {
  return async (dispatch, getState) => {
    const response = await fetch('https://eatgo-customer-api.ahastudio.com/regions');
    const regions = await response.json();
    dispatch(setRegions(regions));

    const { filter } = getState();
    dispatch(setFilter({ ...filter, region: regions[0].id }));
  };
}

export function setCategories(categories) {
  return {
    type: ACTION_TYPES.SET_CATEGORIES,
    payload: { categories },
  };
}

export function fetchCategories() {
  return async (dispatch, getState) => {
    const response = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
    const categories = await response.json();
    dispatch(setCategories(categories));

    const { filter } = getState();
    dispatch(setFilter({ ...filter, category: categories[0].id }));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: ACTION_TYPES.SET_RESTAURANTS,
    payload: { restaurants },
  };
}

export function fetchRestaurants() {
  return async (dispatch, getState) => {
    const { filter } = getState();
    const response = await fetch(
      `https://eatgo-customer-api.ahastudio.com/restaurants?region=${filter.region}&category=${filter.category}`,
    );
    const restaurants = await response.json();
    dispatch(setRestaurants(restaurants));
  };
}
