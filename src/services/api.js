const BASEURL = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const url = `${BASEURL}/regions`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = `${BASEURL}/categories`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
