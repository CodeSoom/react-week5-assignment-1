export function fetchRegions() {
  return fetch('https://eatgo-customer-api.ahastudio.com/regions');
}

export function fetchCategories() {
  return fetch('https://eatgo-customer-api.ahastudio.com/categories');
}

export function fetchRestaurants(regionName, categoryId) {
  return fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`);
}
