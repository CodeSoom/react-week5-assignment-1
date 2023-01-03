const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const fetchedRegions = await response.json();

  return fetchedRegions;
};

export { fetchRegions };
