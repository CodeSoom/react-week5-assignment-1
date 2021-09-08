export const fetchRegions = jest.fn(() => [
  { id: 1, name: '서울' },
  { id: 2, name: '대구' },
  { id: 3, name: '부산' },
]);

export const fetchCategories = jest.fn(() => [
  { id: 1, name: '한식' },
  { id: 2, name: '중식' },
  { id: 3, name: '일식' },
]);

export const fetchRestaurants = jest.fn(() => [
  {
    id: 9,
    categoryId: 2,
    name: '호신각',
    address: '서울 강남구',
    information: '호신각 in 서울 강남구',
  },
  {
    id: 10,
    categoryId: 2,
    name: '홍콩반점',
    address: '서울시 서대문구',
    information: '홍콩반점 in 서울시 서대문구',
  },
  {
    id: 11,
    categoryId: 2,
    name: '몰라몰라',
    address: '서울이다',
    information: '몰라몰라 in 서울이다',
  },
]);
