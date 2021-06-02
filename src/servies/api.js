export const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  const response = await fetch(url);
  const data = await response.json();

  return data.map((row) => row.name);
};

export const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';

  const response = await fetch(url);
  const data = await response.json();

  return data.map((row) => row.name);
};
