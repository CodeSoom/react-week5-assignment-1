import { getCategories, getRegions, getRestaurants } from './services/api';

export function selectRegion(regionName) {
  return { type: 'selectRegion', payload: regionName };
}

export function selectCategory(categoryId) {
  return { type: 'selectCategory', payload: categoryId };
}

export function getRegionsThunk() {
  return async (dispatch) => {
    dispatch({ type: 'getRegions' });
    try {
      const data = await getRegions();
      dispatch({ type: 'getRegionsSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getRegionsFailure', payload: error });
    }
  };
}

export function getCategoriesThunk() {
  return async (dispatch) => {
    dispatch({ type: 'getCategories' });
    try {
      const data = await getCategories();
      dispatch({ type: 'getCategoriesSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'getCategoriesFailure', payload: error });
    }
  };
}

export function getRestaurantsThunk() {
  return async (dispatch) => {
    dispatch({ type: 'getRestaurants' });
    try {
      const data = await getRestaurants();
      dispatch({ type: 'getRestaurantsSuccess', payload: data });
    } catch (error) {

    }
  };
}
