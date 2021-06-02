const initialState = {
  newId: 100,
  regions: [],
  categories: [],
};

const actionTable = (state, action) => ({
  setRegions: {
    ...state,
    regions: action.payload.regions,
  },
  setCategories: {
    ...state,
    categories: action.payload.categories,
  },
  Default: state,
}[action.type] || 'Default');

export default function reducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }
  if (action.payload === undefined) {
    return state;
  }

  return actionTable(state, action);
}
