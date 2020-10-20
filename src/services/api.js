export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const regions = await response.json();

  return regions;
}

export function blank() {

}
