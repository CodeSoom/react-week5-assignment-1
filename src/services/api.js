const base = 'https://eatgo-customer-api.ahastudio.com';
const fetching = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export async function getRestaurants({ region, category }) {
  const url = `${base}/restaurants?region=${region}&category=${category}`;
  const response = await fetching(url);
  return response;
}

export async function getRegions() {
  const url = `${base}/regions`;
  const response = await fetching(url);
  return response;
}

export async function getCategories() {
  const url = `${base}/categories`;
  const response = await fetching(url);
  return response;
}
