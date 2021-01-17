export const fetchRestaurants = async (path) => {
  const url = `https://eatgo-customer-api.ahastudio.com/${path}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const fetchRestaurantsName = async ({ region, category }) => {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${category}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
