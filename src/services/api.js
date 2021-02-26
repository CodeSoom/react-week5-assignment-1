const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

export async function getRegionsApi() {
  const url = `${baseUrl}/regions`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCategoriesApi() {
  const url = `${baseUrl}/categories`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getRestaurantsApi({ regionName, categoryId }) {
  const url = `${baseUrl}/restaurants?region=${regionName}&category=${categoryId}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
