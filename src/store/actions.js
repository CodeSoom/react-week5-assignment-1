export const CHANGE_REGION = 'changeRegion';

export const changeRegion = (regionId) => ({
  type: CHANGE_REGION,
  payload: {
    regionId,
  },
});
