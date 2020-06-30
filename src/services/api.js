export async function fetchRegions() {
  const URL = ' https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

// TODO: delete this!! - it just dummy to avoid lint error
export function xxx() {

}
