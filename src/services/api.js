export const fetchRegions = async () => {
  const API_REGION_PATH = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetch(API_REGION_PATH)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const fetchRestaurantInfo = async ({ regionName, categoryId }) => {
  if (!regionName || !categoryId) {
    return [];
  }
  const API_RESTAURANT_INFO_PATH = 'https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}';
  return fetch(API_RESTAURANT_INFO_PATH
    .replace(/\${regionName}/, regionName)
    .replace(/\${categoryId}/, categoryId))
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
export const fetchCategories = async () => {
  const API_RESTAURANTS_CATERGORY_PATH = 'https://eatgo-customer-api.ahastudio.com/categories';
  return fetch(API_RESTAURANTS_CATERGORY_PATH)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
