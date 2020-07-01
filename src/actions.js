import {
  fetchCategories,
  fetchRestaurantRegions,
  fetchRestaurantInfo,
} from './services/api';

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantRegions();
    dispatch({
      type: 'loadRegions',
      payload: {
        regions,
      },
    });
  };
}
export function loadRestaurantsCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch({
      type: 'loadRestaurantsCategories',
      payload: {
        categories,
      },
    });
  };
}

export function loadRestaurantsInfo(searchQuery) {
  return async (dispatch) => {
    const restaurantsInfo = await fetchRestaurantInfo(searchQuery);
    dispatch({
      type: 'loadRestaurantsInfo',
      payload: {
        restaurantsInfo,
      },
    });
  };
}

export const updateSearchRegion = (regionId) => ({
  type: 'updateSearchRegion',
  payload: {
    regionId,
  },
});
export const updateSearchCatetory = (categoryId) => ({
  type: 'updateSearchCatetory',
  payload: {
    categoryId,
  },
});
