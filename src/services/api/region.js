// eslint-disable-next-line import/prefer-default-export
export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const regions = await response.json();
  return regions;
}
