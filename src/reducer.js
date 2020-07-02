const initialState = {
  addressList: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'loadAddressList') {
    return {
      ...state,
      addressList: action.payload.addressList,
    };
  }

  if (action.type === 'setAddressList') {
    return {
      ...state,
      addressList: action.payload.addressList,
    };
  }

  return state;
}
