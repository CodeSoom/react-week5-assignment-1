const initialState = {
  checkedRegion: null,
  checkedCategory: null,
  regions: [],
  categories: [],
  restaurants: [],
};

const reducers = {
  updateRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
  updateCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
  updateRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
  updateCheckedRegion(state, { payload: { checkedRegion } }) {
    return {
      ...state,
      checkedRegion,
    };
  },

  updateCheckedCategory(state, { payload: { checkedCategory } }) {
    return {
      ...state,
      checkedCategory,
    };
  },
};

function defualtReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defualtReducer)(state, action);
}
