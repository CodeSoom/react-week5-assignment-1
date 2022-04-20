export async function fetchRegionList() {
  // TODO: fetch get/regionList
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// TODO: delete this!
export function xxx() {

}
