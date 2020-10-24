export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);

  const data = response.json();

  return data;
}
// ToDo : delete!
export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function fetchRestaurants({ categoryId, regionName }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(`fetch error ${e}`);
  }
}
