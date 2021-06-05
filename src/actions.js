export function checkRegion(id) {
  return {
    type: 'checkRegion',
    payload: {
      id,
    },
  };
}

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      id,
    },
  };
}