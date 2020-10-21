export function updateFoodCategory(value) {
  return {
    type: 'updateFoodCategory',
    payload: { value },
  };
}

export function updateLocale(value) {
  return {
    type: 'updateLocale',
    payload: { value },
  };
}
