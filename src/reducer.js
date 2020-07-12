import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
  selectRegion: '',
  selectCategory: '',
  restaurants: [],
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
  selectedRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectRegion: regions && regions.find(equal('id', regionId)),
    };
  },
  selectedCategory(state, { payload: { categoryId } }) {
    return {
      ...state,
      selectCategory: state.categories.find(equal('id', categoryId)),
    };
  },
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
