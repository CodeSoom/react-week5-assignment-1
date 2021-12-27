const BASE_URL = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();

  return data;
}

// TODO: delete...
export function temp() {}
