export async function regionData() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  try {
    const data = await fetch(url);
    const result = { regionData: await data.json() };
    return result;
  } catch (error) {
    alert(error);
  }
}

export async function categoryData() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  try {
    const data = await fetch(url);
    const result = { regionData: await data.json() };
    return result;
  } catch (error) {
    alert(error);
  }
}
