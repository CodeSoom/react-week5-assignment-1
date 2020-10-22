// REST - CRUD => Read - collection / member, element

// fetch GET /regions /regions/{id}
export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return data;
}

// TODO: delete this
export function temp() {
  //
}
