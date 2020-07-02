const initialState = {
  region: '',
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action = {}) {
  const reducers = {
    setRegions: ({ regions }) => ({
      ...state,
      regions,
    }),
    setCategories: ({ categories }) => ({
      ...state,
      categories,
    }),
    selectRegion: ({ region }) => ({
      ...state,
      region,
    }),
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
