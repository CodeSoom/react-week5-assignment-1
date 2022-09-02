const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const { regions, categories, restaurants } = state;
  const { type, payload } = action;

  const index = {
    default: () => state,
  };

  return (index[type] || index.default)();
}
