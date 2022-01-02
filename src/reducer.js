import { equal } from './utils';

const initialState = {
  regions: [],
  categories: [],
};

const reducers = {
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
  selectRegion(state, action) {
    const { regionId } = action.payload;
    return {
      ...state,
      selectedRegion: state.regions.find(equal('id', regionId)),
    };
  },
  selectCategory(state, action) {
    const { categoryId } = action.payload;
    return {
      ...state,
      selectedCategory: state.categories.find(equal('id', categoryId)),
    };
  },
};

function defaultReducder(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducder)(state, action);
}
