import { getRegions } from './services/api';

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
