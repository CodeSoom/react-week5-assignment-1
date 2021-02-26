const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
  selected: { regionName: null, categoryId: null },
};

const actionHandler = {

  getRegionsSuccess(state, action) {
    const regions = action.payload.map((region) => ({ ...region, clicked: false }));
    return { ...state, regions };
  },

  getRegionsFailure(state, action) {
    const regions = action.payload;
    return { ...state, error: { ...state.error, regions } };
  },

  selectRegion(state, action) {
    const { selected } = state;
    const regionName = action.payload;
    const regions = state.regions.map((region) => (region.name === regionName
      ? { ...region, clicked: true }
      : { ...region, clicked: false }));

    return { ...state, regions, selected: { ...selected, regionName } };
  },

  getCategoriesSuccess(state, action) {
    const categories = action.payload.map((category) => ({ ...category, clicked: false }));
    return { ...state, categories };
  },

  getCategoriesFailure(state, action) {
    // const categories = action.payload;
    return { ...state, error: { ...state.error, categories: new Error('getCategoriesFailure') } };
  },

  selectCategory(state, action) {
    const { selected } = state;
    const categoryId = action.payload;
    const categories = state.categories.map((category) => (category.id === categoryId
      ? { ...category, clicked: true }
      : { ...category, clicked: false }));

    return { ...state, categories, selected: { ...selected, categoryId } };
  },

  getRestaurantsSuccess(state, action) {
    return {
      ...state,
      restaurants: action.payload,
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
