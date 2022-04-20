export function setRegionList(RegionList) {
  return {
    type: 'setRegionList',
    payload: {
      RegionList,
    },
  };
}
// todo : delete this
export function hello() {
  return {
    type: 'hello',
  };
}
