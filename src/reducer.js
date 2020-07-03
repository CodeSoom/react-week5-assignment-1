const initialState = {
  regions: [],
  categories: [],
  region: '',
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'setRegion') {
    const { region } = action.payload;
    return {
      ...state,
      region: action.payload.region,
      regions: state.regions.map(({ id, name }) => (region === name ? { id, name: `${name}(V)` } : { id, name: name.replace('(V)', '') })),
    };
  }
  return state;
}
