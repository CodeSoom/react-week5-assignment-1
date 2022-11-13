const url = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const response = await fetch(`${url}/regions`);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const response = await fetch(`${url}/categories`);
  const data = await response.json();

  return data;
}

//
export async function fetchRestaurants({ regionName, categoryId }) {
  const response = await fetch(`${url}/restaurants?region=${regionName}&category=${categoryId}`);
  const data = await response.json();

  return data;
}
