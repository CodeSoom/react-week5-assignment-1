const initialState = {
  regions: [],
  categories: [],
};

function getRestaurantInfosIncludeClickedItem(infos, selectedId) {
  return infos.map(({ id, name }) => (
    (id === selectedId)
      ? { id, name: `${name}(V)` }
      : { id, name }
  ));
}

export default function reducer(state = initialState, action) {
  if (action.type === 'checkRegion') {
    const { regions } = state;

    return {
      ...state,
      regions: getRestaurantInfosIncludeClickedItem(regions, action.payload.id),
    };
  }

  if (action.type === 'checkCategory') {
    const { categories } = state;

    return {
      ...state,
      categories: getRestaurantInfosIncludeClickedItem(categories, action.payload.id),
    };
  }

  return state;
}
