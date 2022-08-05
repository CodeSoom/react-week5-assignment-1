export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return [];
}

// TODO delete this
export function xxx() {}
