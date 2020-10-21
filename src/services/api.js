export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);

  const rawData = await response.json();

  const data = rawData.filter((category) => {
    if (category.name === '과자' || category.name === '치킨') {
      return false;
    }
    return true;
  });

  return data;
}
// ToDo : delete!
export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  const response = await fetch(url);

  const data = await response.json();

  return data;
}

export async function fetchRestaurants() {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
}
