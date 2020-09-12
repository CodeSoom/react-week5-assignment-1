const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export function fetchRegions() {
  return fetchData(`${baseUrl}/regions`);
}

export async function fetchCategories() {
  return fetchData(`${baseUrl}/categories`);
}

export async function fetchRestaurants(regionName, categoryId) {
  return fetchData(`${baseUrl}/restaurants?region=${regionName}&category=${categoryId}`);
}
