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

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: {
      regionId,
    },
  };
}
