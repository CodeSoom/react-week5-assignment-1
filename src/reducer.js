const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};

const reducerHandler = {
  setRegions: (state, payload) => {
    const { regions } = payload;

    return {
      ...state,
      regions,
    };
  },
  selectRegion: (state, payload) => {
    const { regionName } = payload;

    return {
      ...state,
      regionName,
    };
  },
  setCategories: (state, payload) => {
    const { categories } = payload;

    return {
      ...state,
      categories,
    };
  },
  selectCategory: (state, payload) => {
    const { categoryId } = payload;

    return {
      ...state,
      categoryId,
    };
  },
  setRestaurants: (state, payload) => {
    const { restaurants } = payload;

    return {
      ...state,
      restaurants,
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducerHandler[action.type]
    ? reducerHandler[action.type](state, action.payload)
    : state;
}
