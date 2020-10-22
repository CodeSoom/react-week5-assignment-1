export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}
