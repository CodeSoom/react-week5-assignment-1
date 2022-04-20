const initialState = {
  RegionList: [],
};

export default function reducer(state = initialState, action) {
  const { RegionList } = state;
  if (action.type === 'setRegionList') {
    return {
      ...state,
      RegionList,
    };
  }

  return state;
}
