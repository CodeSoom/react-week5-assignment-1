export function fetchRestaurantRegions() {
  return fetch('https://eatgo-customer-api.ahastudio.com/regions')
    .then((res) => res.json());
}

export function fetchRestaurantCategories() {
  return fetch('https://eatgo-customer-api.ahastudio.com/categories')
    .then((res) => res.json());
}

export function fetchRestaurants({ regionName, categoryId }) {
  return fetch(`https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`)
    .then((res) => res.json());
}
