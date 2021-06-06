// 레스토랑 지역 목록 보기: https://eatgo-customer-api.ahastudio.com/regions
// 레스토랑 카테고리 목록 보기: https://eatgo-customer-api.ahastudio.com/categories
// 레스토랑 목록 보기: https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants() {
  const url = 'https://eatgo-customer-api.ahastudio.com/restaurants';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
