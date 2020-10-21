async function fetchData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetchData(url);
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  return fetchData(url);
}
