export function setIsLoading(isLoading) {
  return {
    type: 'setIsLoading',
    payload: {
      isLoading,
    },
  };
}

export function getRegions(regions) {
  return {
    type: 'getRegions',
    payload: {
      regions,
    },
  };
}

export function getCategories(categories) {
  return {
    type: 'getCategories',
    payload: {
      categories,
    },
  };
}

export function setRegion(region) {
  return {
    type: 'setRegion',
    payload: {
      region,
    },
  };
}
