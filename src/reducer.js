const initialState = {
  addressList: [],
  categoryList: [],
  selectedAddress: {},
  selectedCategory: {},
  restaurants: [],
};

const reducers = {
  setAddressList: (state, action) => ({ ...state, addressList: action.payload.addressList }),
  setCategoryList: (state, action) => ({ ...state, categoryList: action.payload.categoryList }),
  selectAddress: (state, action) => {
    const { selectedAddressId } = action.payload;

    const selectedAddress = state.addressList
      .filter((address) => address.id === selectedAddressId)[0];

    return {
      ...state,
      selectedAddress,
    };
  },
  selectCategory: (state, action) => {
    const { selectedCategoryId } = action.payload;

    const selectedCategory = state.categoryList
      .filter((category) => category.id === selectedCategoryId)[0];

    return {
      ...state,
      selectedCategory,
    };
  },
  setRestaurants: (state, action) => ({ ...state, restaurants: action.payload.restaurants }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) return state;
  return reducers[action.type](state, action);
}
