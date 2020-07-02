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

  if (action.type === 'changeCategory') {
    return {
      ...state,
      category: action.payload.name,
    };
  }

  return state;
}
