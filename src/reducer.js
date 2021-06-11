export const initialState = {
  restaurantName: '',
  restaurantCategory: '',
  restaurantAddress: '',
  restaurants: [],
};
export default function reducer(state = initialState, action) {
  if (action.type === 'addRestaurant') {
    if (!state.restaurantName || !state.restaurantCategory || !state.restaurantAddress) {
      return state;
    }
    return {
      ...initialState,
      restaurants: [
        ...state.restaurants,
        {
          name: state.restaurantName,
          category: state.restaurantCategory,
          address: state.restaurantAddress,
        },
      ],
    };
  }

  if (action.type === 'updateRestaurantName') {
    return {
      ...state,
      restaurantName: action.payload.name,
    };
  }

  if (action.type === 'updateRestaurantCategory') {
    return {
      ...state,
      restaurantCategory: action.payload.category,
    };
  }

  if (action.type === 'updateRestaurantAddress') {
    return {
      ...state,
      restaurantAddress: action.payload.address,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }
  return state;
}
