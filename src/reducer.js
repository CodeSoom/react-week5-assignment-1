const initialState = {
  currentRegion: '',
  currentCategory: '',
  regions: [],
  categories: [],
  restaurants: [],
};

const actionFunctions = {
  setRegion: (state, action) => {
    const { currentRegion } = action.payload;

    return {
      ...state,
      currentRegion,
    };
  },
  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  setCategory: (state, action) => {
    const { currentCategory } = action.payload;

    return {
      ...state,
      currentCategory,
    };
  },
  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },
};

const defaultFunction = (state) => state;

export default function reducer(state = initialState, action) {
  return (actionFunctions[action.type] || defaultFunction)(state, action);
}
