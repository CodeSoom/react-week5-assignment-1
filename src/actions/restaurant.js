export const TYPES = {
  LOAD_REGIONS: 'LOAD_REGIONS',
};

export function setRegions(regions) {
  return {
    type: TYPES.LOAD_REGIONS,
    payload: { regions },
  };
}
