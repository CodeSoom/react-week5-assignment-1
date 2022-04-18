const initialState = {
  selectCategoryId: undefined,
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'selectCategory') {
    const { selectCategoryId } = action.payload;

    return {
      ...state,
      selectCategoryId,
    };
  }

  return state;
}
