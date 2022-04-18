export function selectCategory({ selectCategoryId }) {
  return {
    type: 'selectCategory',
    payload: {
      selectCategoryId,
    },
  };
}

export function selectRegion({ selectRegionId }) {
  return {
    type: 'selectRegion',
    payload: {
      selectRegionId,
    },
  };
}
