const initialState = {
  selected: {
    region: '',
    category: '',
  },
  regions: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const actions = {
    selectRegion: () => {
      const { region } = action.payload;

      return {
        ...state,
        selected: {
          ...state.selected,
          region,
        },
      };
    },

    selectCategory: () => {
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

    setCategories: () => {
      const { categories } = action.payload;

      return {
        ...state,
        categories,
      };
    },

    setRestaurants: () => {
      const { restaurants } = action.payload;

      return {
        ...state,
        restaurants,
      };
    },
  };

  if (actions[action.type]) return actions[action.type]();

  return state;
}
