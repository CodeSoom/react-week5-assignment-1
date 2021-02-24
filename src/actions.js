export function updateSelectedLocation(locationName) {
  return {
    type: 'updateSelectedLocation',
    payload: { locationName },
  };
}

export function updateSelectedCategory(categoryName) {
  return {
    type: 'updateSelectedCategory',
    payload: { categoryName },
  };
}

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations },
  };
}
