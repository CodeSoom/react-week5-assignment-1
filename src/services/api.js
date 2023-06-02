export async function regionData() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  try {
    const data = await fetch(url);
    const result = { regionData: await data.json() };
    return result;
  } catch (error) {
    return console.log(error);
  }
}

export async function categoryData() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  try {
    const data = await fetch(url);
    const result = { categoryData: await data.json() };
    return result;
  } catch (error) {
    return console.log(error);
  }
}

export async function restaurantData({ regionName, categoryId }) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  try {
    const data = await fetch(url);
    const result = { restaurantData: await data.json() };
    return result;
  } catch (error) {
    return console.log(error);
  }
}
