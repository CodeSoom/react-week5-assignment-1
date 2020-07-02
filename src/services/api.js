export async function fetchAddressList() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions'
  const response = await fetch(url);
  const addressList = await response.json();

  return addressList;
}

export function xxx() {
  //
}
