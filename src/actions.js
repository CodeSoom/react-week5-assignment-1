export function checkRegion(id) {
  return {
    type: 'checkRegion',
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
