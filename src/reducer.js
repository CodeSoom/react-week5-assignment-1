export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};
const reducers = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  selectRegion: (state, { payload: { regionId } }) => {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === regionId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
