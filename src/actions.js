export const GET_REGIONS = 'getRegions';
export const GET_CATEGORIES = 'getCategories';
export const GET_RESTAURANTS = 'getRestaurants';

export function selectRegion(regionName) {
  return { type: 'selectRegion', payload: regionName };
}

export function selectCategory(categoryId) {
  return { type: 'selectCategory', payload: categoryId };
}
/*
TODO

반복을 피하기 위해 만들었지만 사용하는 입장에서 혼란스러울 수 있다.
이름은 사용하는 쪽에서 인터페이스를 결정하는게 좋아요.

createThunk 가 어떻게 생강기 들까요?

개별 thunk 로 분리할 것

*/

export function createThunk(actionType, api, params) {
  return async (dispatch) => {
    dispatch({ type: actionType });
    try {
      const data = await api(params);
      dispatch({ type: `${actionType}Success`, payload: data });
    } catch (error) {
      dispatch({ type: `${actionType}Failure`, payload: error });
    }
  };
}
