export async function fetchRegions() {
  const url = 'http://eatgo-customer-api.ahasudio.com/regions';
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
}

export async function fetchCategories() {
  const url = 'http://eatgo-customer-api.ahasudio.com/categories';
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
}
