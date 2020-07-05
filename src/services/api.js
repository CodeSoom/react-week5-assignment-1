async function getDataFromServer(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const regions = await getDataFromServer(url);
  return regions;
};

const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const categories = await getDataFromServer(url);
  return categories;
};

const fetchRestaurants = async (region, category) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region.name}&category=${category.id}`;
  const restaurants = await getDataFromServer(url);
  return restaurants;
};

export { fetchRegions, fetchCategories, fetchRestaurants };
