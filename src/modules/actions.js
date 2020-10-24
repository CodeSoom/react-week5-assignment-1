export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: { region },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}
