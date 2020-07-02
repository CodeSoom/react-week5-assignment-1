const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  const reducers = {
    setRegions: ({ regions }) => ({
      ...state,
      regions,
    }),
    setCategories: ({ categories }) => ({
      ...state,
      categories,
    }),
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
