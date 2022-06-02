export function fetchRegions() {
  return fetch('https://eatgo-customer-api.ahastudio.com/regions');
}

export function fetchCategories() {
  return fetch('https://eatgo-customer-api.ahastudio.com/categories');
}

export function fetchRestaurants(regionId, categoryId) {
  return fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?regionId=${regionId}&categoryId=${categoryId}`);
}
