const initialState = {
  addressList: [],
  categoryList: [],
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

const addressList = [
  { id: '1', name: '서울' },
  { id: '2', name: '강원도' },
  { id: '3', name: '대전' },
];

const categoryList = [
  { id: '1', name: '한식' },
  { id: '2', name: '중식' },
  { id: '3', name: '일식' },
];

const containAddressState = {
  addressList,
  categoryList: [],
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

const containCategoryState = {
  addressList: [],
  categoryList,
  selectedAddress: '',
  selectedCategory: '',
  restaurants: [],
};

export {
  initialState,
  addressList,
  categoryList,
  containAddressState,
  containCategoryState,
};
