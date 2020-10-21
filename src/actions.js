export const loadRestaurantInfo = ({ type, info }) => ({
  type: 'loadRestaurantInfo',
  payload: {
    type,
    info,
  },
});

export const updateRestaurant = (payload) => ({
  type: 'updateRestaurant',
  payload,
});
