export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function updateRegionsLoading(loading) {
  return {
    type: 'updateRegionsLoading',
    payload: {
      loading,
    },
  };
}

export function selectRegion(regionName) {
  return {
    type: 'selectRegion',
    payload: {
      regionName,
    },
  };
}
