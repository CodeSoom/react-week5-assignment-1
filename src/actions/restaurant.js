export const TYPES = {
  SET_REGIONS: 'SET_REGIONS',
};

export function setRegions(regions) {
  return {
    type: TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function loadRegions() {
  return (dispatch) => {
  };
}
