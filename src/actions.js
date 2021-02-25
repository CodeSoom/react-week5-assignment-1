export function setItems(items) {
  return {
    type: 'setItems',
    payload: {
      items,
    },
  };
}

export function test2() {
  return {
    type: 'test2Type',
    payload: {},
  };
}
