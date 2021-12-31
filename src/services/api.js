export async function fetchRestaurantRegions() {
  const url = "https://eatgo-customer-api.ahastudio.com/regions";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRestaurantCategories() {
  const url = "https://eatgo-customer-api.ahastudio.com/categories";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function functionRestaurant(regionName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;

  const response = await fetch(url);
  //response.json()은 왜 await가 필요한가?
  const data = await response.json();

  return data;
}
