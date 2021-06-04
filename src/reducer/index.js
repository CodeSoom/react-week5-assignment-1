const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  search: {
    region: '',
    categoryId: '',
  },
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  function setRegions() {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  function setCategories() {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  function setRestaurants() {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  function changeSearch() {
    const { search, value } = action.payload;

    return {
      ...state,
      search: {
        ...state.search,
        [search]: value,
      },
    };
  }

  const actionType = {
    setRegions,
    setCategories,
    setRestaurants,
    changeSearch,
  };

  if (!actionType[type]) {
    return state;
  }

  return actionType[type]();
}
