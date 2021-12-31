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

export async function fetchRestaurants(regionName, categoryId) {
  console.log(regionName, categoryId);
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  console.log(url);
  const response = await fetch(url);
  //response.json()은 왜 await가 필요한가?
  const data = await response.json();
  return data;
}
