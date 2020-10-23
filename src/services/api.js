export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const regions = response.json();

  return regions;
}

export async function fetchOptions({ optionName }) {
  const url = `https://eatgo-customer-api.ahastudio.com/${optionName}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}
