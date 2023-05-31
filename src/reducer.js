const initialState = { regionData: '' };

const handleAction = {
  SET_REGION_DATA: (state, action) => {
    const { regionData } = action.payload;
    console.log(regionData);
    return {
      ...state,
      region: regionData,
    };
  },
};

export default function store(state = initialState, action) {
  if (handleAction[action.type]) {
    console.log(action.type);
    return handleAction[action.type](state, action);
  }
  return state;
}
