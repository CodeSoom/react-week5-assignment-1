const initState = {
  regions: [],
  selectRegion: '',
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
      selectRegion: action.payload.selectRegion,
    };
  }

  return previousState;
}
