export function updateSelected(type, value) {
  return {
    type: 'updateSelected',
    payload: {
      [type]: value,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setCategories',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}
