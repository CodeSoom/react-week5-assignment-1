export async function fetchPlaces() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const places = await response.json();

  return places;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const categories = await response.json();

  return categories;
}

export async function fetchRestaurants({ clickedPlace, clickedCategory }) {
  const url = ` https://eatgo-customer-api.ahastudio.com/restaurants?region=${clickedPlace}&category=${clickedCategory}`;
  const response = await fetch(url);
  const restaurants = await response.json();

  return restaurants;
}
