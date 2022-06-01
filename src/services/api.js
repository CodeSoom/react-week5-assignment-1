import APIS from '../../constants/apis';

export async function fetchRegions() {
  const response = await fetch(APIS.REGIONS);
  const data = await response.json();

  return data;
}

export function test() {
  //
}
