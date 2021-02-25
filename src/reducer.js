const initialState = {
  currentRegion: '',
  currentCategory: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegion') {
    const { currentRegion } = action.payload;

    return {
      ...state,
      currentRegion,
    };
  }

  if (action.type === 'setCategory') {
    const { currentCategory } = action.payload;

    return {
      ...state,
      currentCategory,
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
