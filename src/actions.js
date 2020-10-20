export const loadRegion = (regions) => ({
  type: 'loadRegion',
  payload: {
    regions,
  },
});

export const loadRestaurantInfo = ({ type, info }) => ({
  type: 'loadRestaurantInfo',
  payload: {
    type,
    info,
  },
});
