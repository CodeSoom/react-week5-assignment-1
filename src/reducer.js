export const initialState = {
  categories: [],
  regions: [],
  restaurants: [],
  selectedCategory: '',
  selectedRegion: '',
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },

  setSelectedCategory: (state, action) => {
    const { name } = action.payload;

    return {
      ...state,
      selectedCategory: name,
    };
  },

  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },

  setSelectedRegion: (state, action) => {
    const { name } = action.payload;

    return {
      ...state,
      selectedRegion: name,
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

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
