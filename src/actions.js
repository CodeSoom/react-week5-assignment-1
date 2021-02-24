export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function regionClick(id) {
  return {
    type: 'regionClick',
    payload: {
      id,
    },
  };
}
