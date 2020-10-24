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

const reducers = {
  setCategories: (state, payload) => {
    const { categories } = payload;
    return {
      ...state,
      categories,
    };
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
