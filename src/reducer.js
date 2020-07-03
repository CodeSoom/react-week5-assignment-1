const initialState = {
  regions: [],
  categories: [],
  region: '',
};

function newArray(array, value) {
  return array.map(({ id, name }) => (
    value === name
      ? { id, name: `${name.replace(/\(V\)/g, '')}(V)` }
      : { id, name: name.replace(/\(V\)/g, '') }
  ));
}

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
    const { regions } = state;
    return {
      ...state,
      region,
      regions: newArray(regions, region),
    };
  }
  return state;
}
