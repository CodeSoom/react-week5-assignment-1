const initialState = {
  addressList: [],
  categoryList: [],
  selectedAddress: {},
  selectedCategory: {},
  restaurants: [],
};

const addressList = [
  {
    id: 1,
    name: '서울',
  },
  {
    id: 2,
    name: '대전',
  },
  {
    id: 3,
    name: '대구',
  },
  {
    id: 4,
    name: '부산',
  },
  {
    id: 5,
    name: '광주',
  },
  {
    id: 6,
    name: '강원도',
  },
  {
    id: 7,
    name: '인천',
  },
];

const categoryList = [
  {
    id: 1,
    name: '한식',
  },
  {
    id: 2,
    name: '중식',
  },
  {
    id: 3,
    name: '일식',
  },
  {
    id: 4,
    name: '양식',
  },
  {
    id: 5,
    name: '분식',
  },
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

const restaurants = [
  {
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구',
    information: '양천주가 in 서울 강남구',
  },
  {
    id: 6,
    categoryId: 1,
    name: '한국식 초밥',
    address: '서울 강남구',
    information: '한국식 초밥 in 서울 강남구',
  },
];

const selectedAddress = {
  id: '1',
  name: '서울',
};

const selectedCategory = {
  id: '1',
  name: '한식',
};

export {
  initialState,
  addressList,
  categoryList,
  containAddressState,
  containCategoryState,
  restaurants,
  selectedAddress,
  selectedCategory,
};
