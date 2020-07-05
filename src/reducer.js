const initialState = {
  regions: [],
  categoryList: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const reducers = {
  setRegions: (state, action) => ({ ...state, regions: action.payload.regions }),
  setCategoryList: (state, action) => ({ ...state, categoryList: action.payload.categoryList }),
  selectRegion: (state, { payload: { selectedRegionId } }) => {
    const selectedRegion = state.regions
      .find((region) => region.id === selectedRegionId);

    return { ...state, selectedRegion };
  },
  selectCategory: (state, { payload: { selectedCategoryId } }) => {
    const selectedCategory = state.categoryList
      .find((category) => category.id === selectedCategoryId);

    return { ...state, selectedCategory };
  },
  setRestaurants: (state, action) => ({ ...state, restaurants: action.payload.restaurants }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) return state;
  return reducers[action.type](state, action);
}
