export const initialState = {
  newId: 100,
  restaurants: [],
  categories: [],
  category: '',
  regions: [],
  region: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'setCategory') {
    const { category } = action.payload;
    return {
      ...state,
      category,
    };
  }

  if (action.type === 'setRegion') {
    const { region } = action.payload;
    return {
      ...state,
      region,
    };
  }

  if (action.type === 'getRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'getCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'getRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  return state;
}
