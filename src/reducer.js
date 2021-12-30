const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '이름',
    category: '분류',
    place: '주소',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }
  if (action.type === 'addRestaurant') {
    const { newId, restaurant, restaurants } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { id: newId, restaurant }],
      restaurant: {
        name: '',
        category: '',
        place: '',
      },
    };
  }
  return state;
}
