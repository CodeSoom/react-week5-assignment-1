const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
  selectedlocationname: '',
  selectedcategoryname: '',
};

function updateSelectdLocation(state, action) {
  const { selectedlocationname } = action.payload;
  return ({
    ...state,
    selectedlocationname,
  });
}

function updateSelectedCategory(state, action) {
  const { selectedcategoryname } = action.payload;
  return ({
    ...state,
    selectedcategoryname,
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

export default function reducer(state = initialState, action) {
  const reducers = {
    updateSelectdLocation: updateSelectdLocation(state, action),
    updateSelectedCategory: updateSelectedCategory(state, action),
    setLocations: setLocations(state, action),
    setCategories: setCategories(state, action),
  };

  return reducers[action.type] || state;
}
