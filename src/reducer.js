const initState = {
  regions: [],
  newSelectRegion: '',
};

export default function reducer(previousState = initState, action) {
  if (action.type === 'setInitRegions') {
    return {
      ...previousState,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'selectRegion') {
    return {
      ...previousState,
      newSelectRegion: action.payload.newSelectRegion,
    };
  }

  return previousState;
}
