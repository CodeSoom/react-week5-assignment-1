const initialState = {
  selected: {
    region: '',
    category: '',
  },
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  const actions = {
    updateRegion: () => {
      const { region } = action.payload;

      return {
        ...state,
        selected: {
          ...state.selected,
          region,
        },
      };
    },

    updateCategory: () => {
      const { category } = action.payload;

      return {
        ...state,
        selected: {
          ...state.selected,
          category,
        },
      };
    },

    setRegions: () => {
      const { regions } = action.payload;

      return {
        ...state,
        regions,
      };
    },
  };

  if (actions[action.type]) return actions[action.type]();

  return state;
}
