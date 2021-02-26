import { getRegionsApi, getCategoriesApi, getRestaurantsApi } from './services/api';

export function selectRegion(regionName) {
  return { type: 'selectRegion', payload: regionName };
}

export function selectCategory(categoryId) {
  return { type: 'selectCategory', payload: categoryId };
}

export function getRegions() {
  return async (dispatch) => {
    dispatch({ type: 'getRegions' });
    try {
      const data = await getRegionsApi();
      dispatch({ type: 'getRegionsSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getRegionsFailure', payload: error });
    }
  };
}

export function getCategories() {
  return async (dispatch) => {
    dispatch({ type: 'getCategories' });
    try {
      const data = await getCategoriesApi();
      dispatch({ type: 'getCategoriesSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getCategoriesFailure', payload: error });
    }
  };
}

export function getRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    dispatch({ type: 'getRestaurants' });
    try {
      const data = await getRestaurantsApi({ regionName, categoryId });
      dispatch({ type: 'getRestaurantsSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getRestaurantsFailure', payload: error });
    }
  };
}
