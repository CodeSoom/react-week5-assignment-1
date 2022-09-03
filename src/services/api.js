export async function fetchButtonData(sort) {
  const url = `https://eatgo-customer-api.ahastudio.com/${sort}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// 임시 함수
export async function fetchFilteringRestaurants({ regionName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const restaurants = await response.json();

  return restaurants;
}
