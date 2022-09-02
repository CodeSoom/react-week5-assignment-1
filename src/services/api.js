export async function fetchButtonData(sort) {
  const url = `https://eatgo-customer-api.ahastudio.com/${sort}`;
  const reponse = await fetch(url);
  const data = await reponse.json();

  return data;
}

// 임시 함수
export function x() {}
