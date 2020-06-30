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

export { fetchRegions, fetchCategories };
