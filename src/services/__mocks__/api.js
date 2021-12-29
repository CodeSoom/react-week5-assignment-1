export async function getRestaurants() {
  return [
    {
      id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
    },
    {
      id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
    },
  ];
}

export async function getRegions() {
  const response = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];
  return response;
}

export async function getCategories() {
  const response = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];
  return response;
}
