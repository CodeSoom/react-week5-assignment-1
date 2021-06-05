const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  search: {
    region: '',
    categoryId: '',
  },
};

function setRegions(state, action) {
  const { regions } = action.payload;

  return {
    ...state,
    regions,
  };
}

function setCategories(state, action) {
  const { categories } = action.payload;

  return {
    ...state,
    categories,
  };
}

function setRestaurants(state, action) {
  const { restaurants } = action.payload;

  return {
    ...state,
    restaurants,
  };
}

function changeSearch(state, action) {
  const { search, value } = action.payload;

  return {
    ...state,
    search: {
      ...state.search,
      [search]: value,
    },
  };
}

function defaultAction(state) {
  return state;
}

const actionType = {
  setRegions,
  setCategories,
  setRestaurants,
  changeSearch,
  defaultAction,
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  return (actionType[type] || defaultAction)(state, action);
}
