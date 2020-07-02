const inistialState = {
  regions: [],
  region: '',
};

export default function reducer(state = inistialState, action) {
  if (action.type === 'changeRegion') {
    return {
      ...state,
      region: action.payload.name,
    };
  }

  return state;
}
