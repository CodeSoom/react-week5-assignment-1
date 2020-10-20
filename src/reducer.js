const initialState = {
  regions: [
    { id: 1, name: '서울' },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  return state;
}
