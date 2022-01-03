import { equal } from './utils';

export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  region: null,
  category: null,
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
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;

    return {
      ...state,
      region: regions.find(equal('id', regionId)),
    };
  },
  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;

    return {
      ...state,
      category: categories.find(equal('id', categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

const reducer = (state = initialState, action) => {
  const actionFunction = reducers[action.type] || defaultReducer;

  return actionFunction(state, action);
};

export default reducer;
