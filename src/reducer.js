const initialState = {
  categories: [],
  regions: [],
  categoryId: 0,
  regionName: '',
  restaurants: [],
  stopLoad: 1,
};

const reducers = {
  setCategories: (state, action) => {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
      restaurants: [],
    };
  },
  setRegions: (state, action) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
      restaurants: [],
    };
  },
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
      stopLoad: 0,
    };
  },
  selectCategory: (state, action) => {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
      restaurants: [],
      stopLoad: 1,
    };
  },
  selectRegion: (state, action) => {
    const { name } = action.payload;
    return {
      ...state,
      regionName: name,
      restaurants: [],
      stopLoad: 1,
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
