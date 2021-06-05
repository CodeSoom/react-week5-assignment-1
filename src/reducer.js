const initialState = {
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'checkRegion') {
    const { regions } = state;

    return {
      ...state,
      regions: regions.map(({ id, name }) => (
        (id === action.payload.id)
          ? { id, name: `${name}(V)`}
          : { id, name }
      )),
    };
  }

  return state;
}