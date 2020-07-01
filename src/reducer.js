const initState = {
  regions: [],
};

export default function reducer(previousState = initState, action) {
  if (action.type === 'setInitRegions') {
    return {
      ...previousState,
      regions: action.payload.regions,
    };
  }

  return previousState;
}
