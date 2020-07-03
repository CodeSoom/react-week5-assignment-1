const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
};

export default function reducer(state = initialState, action) {
  const { selected } = state;
  if (action.type === 'updateSelected') {
    return {
      ...state,
      selected: {
        ...selected,
        ...action.payload,
      },
    };
  }

  return state;
}
