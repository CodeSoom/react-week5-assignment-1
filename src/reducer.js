import { equal } from './utils';

const initialState = {
  restaurants: [],
  categories: [],
  regions: [],
  selectRegion: null,
  selectCategory: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories }}) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, action) {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  },

  selectRegion(state, { payload: { regionId }}) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: { categoryId }}) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
};

// 미정의된 타입
function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
};
