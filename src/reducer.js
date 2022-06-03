const initialState = {
  categories: [],
  regions: [],
  selectedRegion: { id: '', name: '' },
  selectedCategory: { id: '', name: '' },
  restaurants: [],
};

const actions = {
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  setRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
  setRestaurants: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
  chooseRegion: (state, action) => ({
    ...state,
    selectedRegion: action.payload.region,
  }),
  chooseCategory: (state, action) => ({
    ...state,
    selectedCategory: action.payload.category,
  }),
};

const defaultAction = (state) => state;

function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;
