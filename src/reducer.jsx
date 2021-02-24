const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectCategoryId: null,
  selectRegionId: null,
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
  clickCategory: ({ state, action }) => {
    const { id } = action.payload;

    return {
      ...state,
      selectCategoryId: id,
    };
  },
  clickRegion: ({ state, action }) => {
    const { id } = action.payload;

    return {
      ...state,
      selectRegionId: id,
    };
  },
};

export default function reducer(state = initialState, action = { type: '' }) {
  return reducerState[action.type] ? reducerState[action.type]({ state, action }) : state;
}
