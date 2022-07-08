export const baseURL = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${baseURL}/regions`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = `${baseURL}/categories`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants({ region, categoryId }) {
  const url = `${baseURL}/restaurants?region=${region}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
