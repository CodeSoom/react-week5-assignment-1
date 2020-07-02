const initialState = {
  addressList: [],
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

  return state;
}
