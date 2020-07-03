const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
  categories: [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ],
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
