export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}
