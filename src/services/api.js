const baseUrl = 'https://eatgo-customer-api.ahastudio.com';

export async function getRegions() {
  const url = `${baseUrl}/regions`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const url = `${baseUrl}/categories`;
  const response = await fetch(url);
  return await response.json();
}
