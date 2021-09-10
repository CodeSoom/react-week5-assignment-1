const initialState = {
  checkedRegion: {},
  checkedCategory: {},
  regions: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'updateCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'updateRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'updateCheckedRegion') {
    const { checkedRegion } = action.payload;
    return {
      ...state,
      checkedRegion,
    };
  }

  if (action.type === 'updateCheckedCategory') {
    const { checkedCategory } = action.payload;
    return {
      ...state,
      checkedCategory,
    };
  }

  return state;
}
