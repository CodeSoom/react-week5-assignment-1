import { getCategories, getRegions } from './services/api';

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

export function getCategoreisThunk() {
  return async (dispatch) => {
    dispatch({ type: 'getCategories' });
    try {
      const data = await getCategories();
      dispatch({
        type: 'getCategoriesSuccess',
        payload: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ],
      });
    } catch (error) {
      dispatch({ type: 'getCategoriesFailure', payload: error });
    }
  };
}
