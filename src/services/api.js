export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
}

export function xxx() {
  // TODO: Delete this!
}
