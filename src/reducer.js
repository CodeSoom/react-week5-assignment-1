import { equal } from './utils';

const initialState = {
  regions: [],
  restaurants: [],
  categories: [],
  selectedRegion: null,
  selectedCategory: null,
};

const actionCreators = {
  setRegions(state, action) {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, action) {
    const { categories } = action.payload;
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

  selectRegion(state, action) {
    const { regionId } = action.payload;
    const { regions } = state;

    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
      // selectedRegion: regions.find((region) => region.id === regionId),
    };
  },

  selectCategory(state, action) {
    const { categoryId } = action.payload;
    const { categories } = state;

    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
