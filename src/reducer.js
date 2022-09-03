const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  filter: {
    region: null,
    category: null,
  },
};

export default function reducer(state = initialState, action) {
  const {
    regions, categories, restaurants, filter,
  } = state;
  const { type, payload } = action;

  const index = {
    default: () => state,
  };

  return (index[type] || index.default)();
}
