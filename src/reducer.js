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
    const { selectedAddress } = action.payload;
    return {
      ...state,
      selectedAddress,
    };
  }

  return state;
}
