export function setRegionList(regionList) {
  return {
    type: 'setRegionList',
    payload: {
      regionList,
    },
  };
}
// todo : delete this
export function hello() {
  return {
    type: 'hello',
  };
}
