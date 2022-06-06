import { fetchRegions, fetchCategories, fetchRestaurants } from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function selectCategoryId(id) {
  return {
    type: 'selectCategoryId',
    payload: {
      selectCategoryId: id,
    },
  };
}

export function selectRegion(name) {
  return {
    type: 'selectRegion',
    payload: {
      selectRegion: name,
    },
  };
}

export function setErrorMessage(target, errorMessage) {
  return {
    type: 'setErrorMessage',
    payload: {
      errorMessage: (errorMessage && target) ? {
        [target]: `${errorMessage} 잠시 후 다시 시도해주세요`,
      } : null,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();

      dispatch(setRegions(regions));
    } catch (error) {
      dispatch(setErrorMessage('regions', error.message));
    }
  };
}

export function loadCategories() {
  return async (dispatch) => {
    try {
      const categories = await fetchCategories();

      dispatch(setCategories(categories));
    } catch (error) {
      dispatch(setErrorMessage('categories', error.message));
    }
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategoryId: categoryId,
    } = getState();

    try {
      const restaurants = await fetchRestaurants(region, categoryId);

      dispatch(setRestaurants(restaurants));
    } catch (error) {
      dispatch(setErrorMessage('restaurants', error.message));
    }
  };
}
