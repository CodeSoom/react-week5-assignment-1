export async function getRestaurant({ region, category }) {
  return [];
}

export async function getRegions() {
  return [];
}

export async function getCategories() {
  const response = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];
  return response;
}
