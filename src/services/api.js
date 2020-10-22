export async function fetchRegions() {
  return [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];
}

export async function fetchCategories() {
  return [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
  ];
}

export async function fetchRestaurants({ regionId, categoryId }) {
  return [{
    id: 1,
    categoryId: 1,
    name: '양천주가',
    address: '서울 강남구 123456',
    information: '양천주가 in 서울 강남구 123456',
  }];
}
