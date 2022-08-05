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

export default function reducer(state = initialState, action) {
  if (!action) return state;

  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'selectRegion') {
    const region = selectFromList({
      list: state.regions,
      filter: action.payload.regionName,
    });
    return {
      ...state,
      region,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'selectCategory') {
    const category = selectFromList({
      list: state.categories,
      filter: action.payload.categoryName,
    });
    return {
      ...state,
      category,
    };
  }

  return state;
}
