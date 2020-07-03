const initialState = {
  selected: {
    categoryId: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateSelected') {
    return {
      ...state,
      selected: {
        ...state.selected,
        categoryId: action.payload.categoryId,
      },
    };
  }

  return state;
}
