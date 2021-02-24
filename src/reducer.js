const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
  watching: { regionName: null, categoryId: null },
};

const actionHandler = {

  GET_REGIONS_SUCCESS(state, action) {
    const regions = action.payload.map((region) => ({ ...region, clicked: false }));
    return { ...state, regions };
  },

  WATCH_THE_REGION(state, action) {
    const { watching } = state;
    const regionName = action.payload;
    const regions = state.regions.map((region) => (region.name === regionName
      ? { ...region, clicked: true }
      : { ...region, clicked: false }));

    return { ...state, regions, watching: { ...watching, regionName } };
  },

  GET_CATEGORIES_SUCCESS(state, action) {
    const categories = action.payload.map((category) => ({ ...category, clicked: false }));
    return { ...state, categories };
  },

  WATCH_THE_CATEGORY(state, action) {
    const { watching } = state;
    const categoryId = action.payload;
    const categories = state.categories.map((category) => (category.id === categoryId
      ? { ...category, clicked: true }
      : { ...category, clicked: false }));

    return { ...state, categories, watching: { ...watching, categoryId } };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
