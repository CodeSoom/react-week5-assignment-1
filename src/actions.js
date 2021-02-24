export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
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

export function categoryClick(id) {
  return {
    type: 'categoryClick',
    payload: {
      id,
    },
  };
}
