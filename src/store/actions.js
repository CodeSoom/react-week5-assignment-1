export const CHANGE_REGION = 'changeRegion';
export const CHANGE_CATEGORY = 'changeCategory';

export const changeRegion = (regionName) => ({
  type: CHANGE_REGION,
  payload: {
    regionName,
  },
});

export const changeCategory = (categoryId) => ({
  type: CHANGE_CATEGORY,
  payload: {
    categoryId,
  },
});
