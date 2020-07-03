export function updateSelected(type, value) {
  return {
    type: 'updateSelected',
    payload: {
      [type]: value,
    },
  };
}

export function xxx() {
  // TODO: delete this
}
