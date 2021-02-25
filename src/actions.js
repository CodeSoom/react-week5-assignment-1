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
      dispatch({
        type: 'getRegionsSuccess',
        payload: [
          { id: 1, name: '서울' },
          { id: 7, name: '인천' },
          { id: 3, name: '대구' },
          { id: 4, name: '부산' },
          { id: 8, name: '울산' },
          { id: 5, name: '광주' },
        ],
      });
    } catch (error) {
      dispatch({ type: 'getRegionsFailure', payload: error });
    }
  };
}
