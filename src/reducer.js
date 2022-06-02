const initialState = {
  categories: [],
  regions: [],
  clickedRegion: { id: '', name: '' },
  clickedCategory: { id: '', name: '' },
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
    clickedRegion: action.payload.region,
  }),
  chooseCategory: (state, action) => ({
    ...state,
    clickedCategory: action.payload.category,
  }),
};

const defaultAction = (state) => state;

function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;
