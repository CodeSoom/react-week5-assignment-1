export const CHANGE_REGION = 'changeRegion';
export const CHANGE_CATEGORY = 'changeCategory';

export const changeRegion = (regionId) => ({
  type: CHANGE_REGION,
  payload: {
    regionId,
  },
});

export const changeCategory = (categoryId) => ({
  type: CHANGE_CATEGORY,
  payload: {
    categoryId,
  },
});
