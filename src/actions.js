// eslint-disable-next-line import/prefer-default-export
export function setRegions({ regions }) {
  return {
    type: 'setRegions',
    payload: regions,
  };
}
