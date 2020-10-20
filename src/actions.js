export const loadRegion = (regions) => ({
  type: 'loadRegion',
  payload: {
    regions,
  },
});

export const loadCategory = (categorys) => ({
  type: 'loadCategory',
  payload: {
    categorys,
  },
});
