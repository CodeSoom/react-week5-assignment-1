export async function fetchCategories() {
  const response = await fetch('https://eatgo-customer-api.ahastudio.com/categories');
  const data = await response.json();
  return data;
}

// ToDo: Delete this.
export function xxx() {
  //
}
