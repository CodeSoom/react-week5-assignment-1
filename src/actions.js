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
