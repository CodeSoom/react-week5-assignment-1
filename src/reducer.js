const initState = {
  regions: [],
  selectedRegion: '',
  categories: [],
  selectedCategory: '',
  restaurants: [],
};

const reducers = {
  setInitRegions: (previousState, action) => ({
    ...previousState,
    regions: action.payload.regions,
  }),
  selectRegion: (previousState, action) => ({
    ...previousState,
    selectedRegion: action.payload.selectedRegion,
  }),
  // TODO : categories
  selectCategory: (previousState, action) => ({
    ...previousState,
    selectedCategory: action.payload.selectedCategory,
  }),
  setRestaurants: (previousState, action) => ({
    ...previousState,
    restaurants: action.payload.restaurants,
  }),

};

export default function reducer(previousState = initState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}
