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

    const regions = state.regions.map((region) => {
      if (region.id !== selectedRegionId) {
        return {
          ...region,
          name: region.name.replace(/\([\S\s]\)/g, ''),
        };
      }
      return {
        ...region,
        name: `${region.name}(V)`,
      };
    });

    return { ...state, regions, selectedRegion };
  },
  selectCategory: (state, { payload: { selectedCategoryId } }) => {
    const selectedCategory = state.categoryList
      .find((category) => category.id === selectedCategoryId);

    const categoryList = state.categoryList.map((category) => {
      if (category.id !== selectedCategoryId) {
        return {
          ...category,
          name: category.name.replace(/\([\S\s]\)/g, ''),
        };
      }
      return {
        ...category,
        name: `${category.name}(V)`,
      };
    });

    return { ...state, categoryList, selectedCategory };
  },
  setRestaurants: (state, action) => ({ ...state, restaurants: action.payload.restaurants }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) return state;
  return reducers[action.type](state, action);
}
