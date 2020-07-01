export async function fetchInitRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// TODO : 삭제 예정
export function needDelete() {
}
