const initialState = {
  addressList: [],
  categoryList: [],
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setAddressList') {
    return {
      ...state,
      addressList: action.payload.addressList,
    };
  }

  if (action.type === 'selectAddress') {
    const { selectedAddressId } = action.payload;

    const selectedAddress = state.addressList
      .filter((address) => address.id === selectedAddressId)[0].name;

    return {
      ...state,
      selectedAddress,
    };
  }

  if (action.type === 'selectCategory') {
    const { selectedCategoryId } = action.payload;

    const selectedCategory = state.categoryList
      .filter((category) => category.id === selectedCategoryId)[0].name;

    return {
      ...state,
      selectedCategory,
    };
  }

  if (action.type === 'setCategoryList') {
    return {
      ...state,
      categoryList: action.payload.categoryList,
    };
  }

  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  return state;
}
