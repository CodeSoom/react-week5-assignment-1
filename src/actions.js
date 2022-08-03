export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function markSelectedRegion(regionName) {
  return {
    type: 'markSelectedRegion',
    payload: {
      regionName,
    },
  };
}
