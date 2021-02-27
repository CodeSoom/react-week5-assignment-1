const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
  selectedLocationName: null,
  selectedCategoryName: null,
};

function updateSelectdLocation(state, action) {
  const { selectedLocationName } = action.payload;
  return ({
    ...state,
    selectedLocationName,
  });
}

function updateSelectedCategory(state, action) {
  const { selectedCategoryName } = action.payload;
  return ({
    ...state,
    selectedCategoryName,
  });
}

function setLocations(state, action) {
  const { locations } = action.payload;
  return ({
    ...state,
    locations,
  });
}

function setCategories(state, action) {
  const { categories } = action.payload;
  return ({
    ...state,
    categories,
  });
}

function setRestaurants(state, action) {
  const { restaurants } = action.payload;
  return ({
    ...state,
    restaurants,
  });
}

export default function reducer(state = initialState, action) {
  const reducers = {
    updateSelectdLocation: updateSelectdLocation(state, action),
    updateSelectedCategory: updateSelectedCategory(state, action),
    setLocations: setLocations(state, action),
    setCategories: setCategories(state, action),
    setRestaurants: setRestaurants(state, action),
  };

  return reducers[action.type] || state;
}
