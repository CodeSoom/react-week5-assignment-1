const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedCategory: null,
  selectedRegion: null,
};

const reducerState = {
  setRegions: ({ state, action }) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  setCategories: ({ state, action }) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  setRestaurants: ({ state, action }) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },
  selectCategory: ({ state, action }) => {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategory: category,
    };
  },
  selectRegion: ({ state, action }) => {
    const { region } = action.payload;

    return {
      ...state,
      selectedRegion: region,
    };
  },
};

export default function reducer(state = initialState, action = { type: '' }) {
  return reducerState[action.type] ? reducerState[action.type]({ state, action }) : state;
}
