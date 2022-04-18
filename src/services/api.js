async function fetchData(url) {
  const data = await fetch(url);

  return data.json();
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  return fetchData(url);
}

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  return fetchData(url);
}
