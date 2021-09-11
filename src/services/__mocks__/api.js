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
    name: '호신각',
  },
  {
    id: 10,
    name: '홍콩반점',
  },
  {
    id: 11,
    name: '몰라몰라',
  },
]);
