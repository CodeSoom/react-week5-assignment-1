const initState = {
  regions: [],
  newSelectRegion: '',
};

const reducers = {
  setInitRegions: (previousState, action) => ({
    ...previousState,
    regions: action.payload.regions,
  }),
  selectRegion: (previousState, action) => ({
    ...previousState,
    newSelectRegion: action.payload.newSelectRegion,
  }),
};

export default function reducer(previousState = initState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}
