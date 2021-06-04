export const fetchRegions = jest.fn(
  async () => ['서울', '대전', '대구', '부산', '광주', '강원도'],
);

export const fetchCategories = jest.fn(
  async () => [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' }],
);

export const fetchRestaurants = jest.fn(
  async (regionName, categoryId) => {
    if ([regionName, categoryId].includes(null)) {
      return [];
    }
    return ['양천주가', '한국식 초밥', '김초밥'];
  },
);
