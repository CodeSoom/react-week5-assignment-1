const reducers = {
  setRestaurantRegions: (state, payload) => {
    const { restaurantRegions } = payload;
    return {
      ...state,
      restaurantRegions,
    };
  },
};

export default function reducer(state, { type, payload }) {
  return reducers[type](state, payload);
}
