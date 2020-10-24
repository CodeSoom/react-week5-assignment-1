const initialState = {
  categories: [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
    { id: 6, name: '과자' },
    { id: 7, name: '치킨' },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  return state;
}
