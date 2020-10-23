export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedButtons: {
    region: '',
    category: '',
  },
};

export default function reducer(state = initialState, action) {
  const router = {
    intializeSelectButtons: () => {
      const { regions, categories } = action.payload;

      return {
        ...state,
        regions,
        categories,
      };
    },

    setSelectedButton: () => {
      const { type, value } = action.payload;

      return {
        ...state,
        selectedButtons: {
          ...state.selectedButtons,
          [type]: value,
        },
      };
    },

    setRestaurants: () => ({
      ...state,
      restaurants: action.payload,
    }),
  };

  return (router[action.type] || (() => state))();
}
