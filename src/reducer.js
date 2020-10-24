const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  region: '',
  categoryId: '',
};

export default function reducer(state = initialState, action) {
  const handler = {
    updateRegion: () => {
      const { region } = action.payload;
      return {
        ...state,
        region,
      };
    },

    updateCategoryId: () => {
      const { categoryId } = action.payload;

      return {
        ...state,
        categoryId,
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

  return (handler[action.type] || state)();
}
