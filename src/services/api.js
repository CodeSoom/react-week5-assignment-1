export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchStores() {
  // const url = 'https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}';
  // const url = 'https://eatgo-customer-api.ahastudio.com/restaurants?region=서울&category=양식';
  // const response = await fetch(url);
  // const data = await response.json();
  return {};
}

export function xxx() {

}
