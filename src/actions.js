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

export function regionClick(regionName) {
  return {
    type: 'regionClick',
    payload: {
      regionName,
    },
  };
}

export function categoryClick(id) {
  return {
    type: 'categoryClick',
    payload: {
      categoryId: id,
    },
  };
}
