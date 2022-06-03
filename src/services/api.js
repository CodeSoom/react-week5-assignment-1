export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchAreas() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurants(areaName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${areaName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
