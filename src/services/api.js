export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';

  const response = await fetch(url);

  const data = response.json();

  return data;
}
// ToDo : delete!
export function xxX() {

}
