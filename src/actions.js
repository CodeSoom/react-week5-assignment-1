export function updateFilter({ filter }) {
  return {
    type: 'updateFilter',
    payload: {
      filter,
    },
  };
}
