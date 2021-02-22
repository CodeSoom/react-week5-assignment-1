export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetch(url).then((response) => response.json());
}

export function name() {
  return '';
}
