const initialState = {
  addressList: [],
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

const addressList = [
  { id: '1', name: '서울' },
  { id: '2', name: '강원도' },
  { id: '3', name: '대전' },
];

const containAddressState = {
  addressList,
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

export { initialState, addressList, containAddressState };
