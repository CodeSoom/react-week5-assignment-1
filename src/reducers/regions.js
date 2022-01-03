const initialState = {
  regions: [],
  activeId: -1,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setRegionActiveId') {
    const { activeId } = action.payload;

    return {
      ...state,
      activeId,
    };
  }

  return state;
}
