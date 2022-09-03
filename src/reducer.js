const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  filter: {
    regionName: null,
    categoryId: null,
  },
};

export default function reducer(state = initialState, action) {
  const {
    regions, categories, restaurants, filter,
  } = state;

  const { type, payload } = action;

  const index = {
    setButtonData: () => {
      const { sort, data } = payload;
      return {
        ...state,
        [sort]: data,
      };
    },

    default: () => state,
  };

  return (index[type] || index.default)();
}
