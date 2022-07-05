const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${baseUrl}/regions`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = `${baseUrl}/categories`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
