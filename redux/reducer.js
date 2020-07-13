export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};

const actionType = {
  setRegions: (state, action) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  setCategories: (state, action) => {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  },
};

export default function reducer(state = initialState, action) {
  return action && actionType[action.type] ? (actionType[action.type])(state, action) : state;
}
