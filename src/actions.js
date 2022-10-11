export function fetchLocations(location) {
  return {
    type: 'fetchLocations',
    payload: {
      location,
    },
  };
}

export function fetchCategories(category) {
  return {
    type: 'fetchCategories',
    payload: {
      category,
    },
  };
}
