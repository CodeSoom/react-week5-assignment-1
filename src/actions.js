import fixture from '../fixtures/regions';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return {
    type: 'setRegions',
    payload: {
      regions: fixture,
    },
  };
}
