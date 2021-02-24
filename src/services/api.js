export default async function fetchLocations() {
  const url = '';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
