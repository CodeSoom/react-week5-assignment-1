const initialState = {
  regions: [],
};

export default function  reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setFoods') {
    const { foods } = action.payload;
    return {
      ...state,
      foods,
    };
  }

  return state;
}