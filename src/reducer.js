const initialState = {
  categories: [],
  regions: [],
  categoryId: 0,
  selectedRegion: {
    regionName: '',
    regionId: 0,
  },
  restaurants: [],
  stopFetch: 1,
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
      stopFetch: 0,
    };
  },
  selectCategory: (state, action) => {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
      restaurants: [],
      stopFetch: 1,
    };
  },
  selectRegion: (state, action) => {
    const { name, id } = action.payload;
    return {
      ...state,
      selectedRegion: {
        regionName: name,
        regionId: id,
      },
      restaurants: [],
      stopFetch: 1,
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
