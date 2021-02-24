export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const respone = await fetch(url);
  const data = await respone.json();
  // TODO: fetch get /categories
  // rest - crud => read - collection /member, element
  return data;
}

export function xxx() {
  //
}
