const initialState = {
  categories: [],
  regions: [],
  categoryId: 0,
  regionName: '',
  restaurants: [],
  stopLoad: 1,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
      restaurants: [],
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
      restaurants: [],
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
      stopLoad: 0,
    };
  }

  if (action.type === 'selectCategory') {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
      restaurants: [],
      stopLoad: 1,
    };
  }

  if (action.type === 'selectRegion') {
    const { name } = action.payload;
    return {
      ...state,
      regionName: name,
      restaurants: [],
      stopLoad: 1,
    };
  }
  return state;
}
