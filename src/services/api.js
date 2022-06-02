export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export function xxx() {}
