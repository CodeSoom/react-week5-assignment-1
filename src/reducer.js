export default function reducer(state, action) {
  if(action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  return state;
}
