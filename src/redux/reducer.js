// 액션 타입
export const SET_AREAS = 'SET_AREAS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// 액션 생성 함수
export const setAreas = (areas) => ({ type: SET_AREAS, payload: { areas } });
export const setCategories = (categories) => ({ type: SET_CATEGORIES, payload: { categories } });

const initialState = {
  area: [],
  categories: [],
};

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
  default: {
    return state;
  }
  }
}
