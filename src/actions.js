export function updateRegions(data) {
  return {
    type: 'updateRegions',
    payload: {
      regions: data,
    },
  };
}

export function updateCategories(data) {
  return {
    type: 'updateCategories',
    payload: {
      categories: data,
    },
  };
}

export function updateRestaurants(data) {
  return {
    type: 'updateRestaurants',
    payload: {
      restaurants: data,
    },
  };
}

export function updateCheckedElement(name, value) {
  if (name === 'region') {
    return {
      type: 'updateCheckedRegion',
      payload: {
        checkedRegion: value,
      },
    };
  }
  return {
    type: 'updateCheckedCategory',
    payload: {
      checkedCategory: value,
    },
  };
}
