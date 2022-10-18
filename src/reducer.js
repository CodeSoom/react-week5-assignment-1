const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: {
    id: '',
    name: '',
  },
  selectedCategory: {
    id: '',
    name: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'setSelectedRegion') {
    const { region } = action.payload;

    return {
      ...state,
      selectedRegion: region,
    };
  }

  if (action.type === 'setSelectedCategory') {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategory: category,
    };
  }

  return state;
}
