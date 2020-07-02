const initState = {
  regions: [],
  selectedRegion: '',
  selectedCategory: '',
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
  selectCategory: (previousState, action) => ({
    ...previousState,
    selectedCategory: action.payload.selectedCategory,
  }),
};

export default function reducer(previousState = initState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}
