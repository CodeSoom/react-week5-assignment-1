const initialState = {
  categories: [],
  regions: [],
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
  chooseRegion: (state, action) => ({
    ...state,
    clickedRegion: action.payload.region,
  }),
};

const defaultAction = (state) => state;

function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;
