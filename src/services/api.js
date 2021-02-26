// export async function fetchRegions() {
//   const url = 'https://eatgo-customer-api.ahastudio.com/regions';
//   return fetch(url).then((response) => response.json());
// }

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  return fetch(url).then((response) => response.json());
}
