export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: {},
  selectedCategory: {},
};

function equl(key, value) {
  return (obj) => obj[key] === value;
}

const actionType = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
  changeRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equl('id', regionId)),
    };
  },
  changeCategory: (state, { payload: { categoryId } }) => {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equl('id', categoryId)),
    };
  },
};

export default function reducer(state = initialState, action) {
  return action && actionType[action.type] ? (actionType[action.type])(state, action) : state;
}
