const initialState = {
  regions: [],
  stores: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state, regions,
    };
  }
  if (action.type === 'setStores') {
    const { stores } = action.payload;
    return {
      ...state, stores,
    };
  }
  return state;
}
