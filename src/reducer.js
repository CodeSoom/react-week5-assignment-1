const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};

function getRestaurantInfosIncludeClickedItem(infos, selectedId) {
  return infos.map(({ id, name }) => {
    if (id === selectedId) {
      return name.endsWith('(V)')
        ? { id, name: name.split('(V)')[0] }
        : { id, name: `${name}(V)` }
    }

    return name.endsWith('(V)')
      ? { id, name: name.split('(V)')[0] }
      : { id, name }
  });
}

export default function reducer(state = initialState, action) {
  if (action.type === 'checkRegion') {
    const { regions } = state;
    const { id } = action.payload;

    return {
      ...state,
      regions: getRestaurantInfosIncludeClickedItem(regions, id),
    };
  }

  if (action.type === 'checkCategory') {
    const { categories } = state;
    const { id } = action.payload;

    return {
      ...state,
      categories: getRestaurantInfosIncludeClickedItem(categories, id),
    };
  }

  return state;
}
