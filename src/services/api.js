export async function xxx() {
  return [];
}

export async function fetchOptions({ optionName }) {
  const url = `https://eatgo-customer-api.ahastudio.com/${optionName}`;
  const response = await fetch(url);
  const data = response.json();

  return data;
}
