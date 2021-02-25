export function setItems(region, category) {
  return {
    type: 'setItems',
    payload: {
      region,
      category,
    },
  };
}

export function test2() {
  return {
    type: 'test2Type',
    payload: {},
  };
}
