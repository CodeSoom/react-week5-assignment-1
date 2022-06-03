import { fetchAreas, fetchCategories } from '../services/api';

// 액션 타입
export const SET_AREAS = 'SET_AREAS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_AREA_NAME = 'SET_AREA_NAME';
export const SET_CATEGORY_ID = 'SET_CATEGORY_ID';

// 액션 생성 함수
export const setAreas = (areas) => ({ type: SET_AREAS, payload: { areas } });
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: { categories } });
export const setAreaName = (areaName) => ({ type: SET_AREA_NAME, payload: { areaName } });
export const setCategoryId = (categoryId) => ({ type: SET_CATEGORY_ID, payload: { categoryId } });

const initialState = {
  areas: [],
  categories: [],
  areaName: undefined,
  categoryId: undefined,
};

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadAreas() {
  return async (dispatch) => {
    const areas = await fetchAreas();
    dispatch(setAreas(areas));
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_AREAS: {
    const { areas } = action.payload;
    return {
      ...state,
      areas,
    };
  }
  case SET_CATEGORIES: {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }
  case SET_AREA_NAME: {
    const { areaName } = action.payload;
    return {
      ...state,
      areaName,
    };
  }
  case SET_CATEGORY_ID: {
    const { categoryId } = action.payload;
    return {
      ...state,
      categoryId,
    };
  }
  default: {
    return state;
  }
  }
}
