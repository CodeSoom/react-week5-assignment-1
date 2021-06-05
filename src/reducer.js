const initialState = {
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'checkRegion') {
    const { regions } = state;

    return {
      ...state,
      regions: regions.map(({ id, name }) => {
        if (id === action.payload.id) {
          return {
            id,
            name: `${name}(V)`,
          };
        }
        return {
          id,
          name,
        };
      }),
    };
  }

  return state;
}