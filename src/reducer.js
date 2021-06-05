const initialState = {
  regionId: 0,
  regions: [],
  categories: [],
  restaurants: [],
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
    const { regionId, regions } = state;
    const { id } = action.payload;

    return {
      ...state,
      regions: regionId === id ? regions : getRestaurantInfosIncludeClickedItem(regions, id),
      regionId: id,
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
