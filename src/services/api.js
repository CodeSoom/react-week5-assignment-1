export async function fetchCategories() {
  // 한식, 중식, 양식
  const categories = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(categories);

  return response.json();
}

export async function fetchRegions() {
  // 서울, 대전, 대구
  const regions = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(regions);

  return response.json();
}

export default {};
