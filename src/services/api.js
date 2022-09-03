const REGIONS_URL = 'https://eatgo-customer-api.ahastudio.com/regions';
const CATEGORIES_URL = 'https://eatgo-customer-api.ahastudio.com/categories';

export async function fetchRegions() {
  const response = await fetch(REGIONS_URL);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const response = await fetch(CATEGORIES_URL);
  const data = await response.json();

  return data;
}
