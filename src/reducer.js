export default function reducer(state, action) {
  const { categoryId } = action.payload;

  if (action.type === 'updateSelected') {
    return {
      ...state,
      selected: {
        ...state.selected,
        categoryId,
      },
    };
  }

  return state;
}
