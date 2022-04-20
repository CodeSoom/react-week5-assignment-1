const initialState = {
  regionList: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegionList') {
    const { regionList } = action.payload;
    return {
      ...state,
      regionList,
    };
  }

  return state;
}
