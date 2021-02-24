const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  error: { regions: null, categories: null, restaurants: null },
  watching: { region: null, category: null },
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

    return { ...state, regions, watching: { ...watching, region: regionName } };
  },

  GET_CATEGORIES_SUCCESS(state, action) {
    return {
      ...state,
      categories: [
        { id: 1, name: '한식', clicked: false },
        { id: 2, name: '중식', clicked: false },
        { id: 3, name: '일식', clicked: false },
      ],
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return actionHandler[action.type] ? actionHandler[action.type](state, action) : state;
}
