const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  selectRegion: '',
  selectCategoryId: '',
};

export default function reducer(state = initialState, action) {
  const handler = {
    updateRegion: () => {
      const { region: selectRegion } = action.payload;
      return {
        ...state,
        selectRegion,
      };
    },

    updateCategoryId: () => {
      const { categoryId: selectCategoryId } = action.payload;

      return {
        ...state,
        selectCategoryId,
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
    default: () => state,
  };

  return (handler[action.type] || handler.default)();
}
