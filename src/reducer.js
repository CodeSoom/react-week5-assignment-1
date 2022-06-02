const setRegions = (state, action) => ({
  ...state,
  regions: action.payload.regions,
});

const setCategories = (state, action) => ({
  ...state,
  categories: action.payload.categories,
});

const setCurrentCategoryId = (state, action) => ({
  ...state,
  currentCategoryId: action.payload.currentCategoryId,
});

const setCurrentRegionId = (state, action) => ({
  ...state,
  currentRegionId: action.payload.currentRegionId,
});

export const initialState = {
  currentRegionId: '',
  currentCategoryId: '',
  regions: [],
  categories: [],
  restaurants: [],
};

const actionHandlers = {
  setRegions,
  setCategories,
  setCurrentCategoryId,
  setCurrentRegionId,
};

export default function reducer(state = initialState, action = '') {
  return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
}
