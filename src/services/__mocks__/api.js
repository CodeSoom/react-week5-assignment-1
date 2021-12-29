export async function getRestaurant({ region, category }) {
  return [];
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
