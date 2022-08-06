const initialState = {
  region: {},
  category: {},
  regions: [],
  categories: [],
  restaurants: [],
};

function selectFromList({ list, filter }) {
  return list.filter((item) => item.name === filter)[0];
}

const reducers = {
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  selectRegion(state, { payload: { regionName } }) {
    const region = selectFromList({
      list: state.regions,
      filter: regionName,
    });
    return {
      ...state,
      region,
    };
  },

  selectCategory(state, { payload: { categoryName }}) {
    const category = selectFromList({
      list: state.categories,
      filter: categoryName,
    });
    return {
      ...state,
      category,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action && action.type] || defaultReducer)(state, action);
}
