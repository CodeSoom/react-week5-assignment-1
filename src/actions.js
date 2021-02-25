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
      dispatch({
        type: 'getRestaurantsSuccess',
        payload: [
          {
            id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
          }, {
            id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
          }, {
            id: 14, categoryId: 1, name: '김초밥', address: '서울시 강남구 역삼동', information: '김초밥 in 서울시 강남구 역삼동',
          },
        ],
      });
    } catch (error) {
      dispatch({ type: 'getRestaurantsFailure', payload: error });
    }
  };
}
