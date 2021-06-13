const initialState = {
  regionName: '',
  categoryId: 0,
  regions: [],
  categories: [],
  restaurants: [],
};

function getRestaurantInfosIncludeClickedItem(infos, selectedId) {
  return infos.map(({ id, name }) => {
    if (id === selectedId) {
      return name.endsWith('(V)')
        ? { id, name: name.split('(V)')[0] }
        : { id, name: `${name}(V)` };
    }

    return name.endsWith('(V)')
      ? { id, name: name.split('(V)')[0] }
      : { id, name };
  });
}

export default function reducer(state = initialState, action) {
  if (action.type === 'checkRegion') {
    const { regions } = state;
    const { id } = action.payload;

    return {
      ...state,
      regionName: regions.find((region) => region.id === id).name,
      regions: getRestaurantInfosIncludeClickedItem(regions, id),
    };
  }

  if (action.type === 'checkCategory') {
    const { categories } = state;
    const { id } = action.payload;

    return {
      ...state,
      categoryId: id,
      categories: getRestaurantInfosIncludeClickedItem(categories, id),
    };
  }

  if (action.type === 'setRestaurantRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setRestaurantCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
      regionName: '',
      categoryId: 0,
    };
  }

  return state;
}
