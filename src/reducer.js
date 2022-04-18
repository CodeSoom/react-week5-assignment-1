const initialState = {
  selectCategoryId: undefined,
  categories: [],
  selectAddressId: undefined,
  addresses: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'selectCategory') {
    const { selectCategoryId } = action.payload;

    return {
      ...state,
      selectCategoryId,
    };
  }

  if (action.type === 'selectAddress') {
    const { selectAddressId } = action.payload;

    return {
      ...state,
      selectAddressId,
    };
  }

  return state;
}
