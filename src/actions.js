export function updateSelected(type, value) {
  return {
    type: 'updateSelected',
    payload: {
      [type]: value,
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
