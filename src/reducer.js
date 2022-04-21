const initialState = {
  regionList: [],
  regionId: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegionList') {
    const { regionList } = action.payload;
    return {
      ...state,
      regionList,
    };
  }

  if (action.type === 'selectRegion') {
    const { id } = action.payload;
    return {
      ...state,
      regionId: id,
    };
  }

  return state;
}
