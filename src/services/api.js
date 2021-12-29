export async function fetchLoadLoaction() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export function s() {

}
