const initialState = {
  region: '',
  category: '',
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
    selectCategory: ({ category }) => ({
      ...state,
      category,
    }),
  };

  return reducers[action.type] ? (
    reducers[action.type](action.payload)
  ) : (
    state
  );
}
