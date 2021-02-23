export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  return fetch(url).then((response) => response.json());
}

export function name() {
  // TODO: Lint 에러방지용 함수. 삭제하기
  return '';
}
