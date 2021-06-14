import { fetchCategories } from './services/api';

export function loadInitialData() {
  return { type: 'loadInitialData' };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
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

export function loadCategories() {
  // 질문할 것 : dispatch는 어디서 받아오는 값인가?
  // (loadCategories 함수를 호출하는 dispatch를 그대로 가져오는데 어떻게 가능한가?)
  //  이런형태의 코드문법을 뭐라 부르나?
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  // TODO : fetch 구현
  return async (dispatch) => {
    const restaurants = [];
    dispatch(setRestaurants(restaurants));
  };
}
