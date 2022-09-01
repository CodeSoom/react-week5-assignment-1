const initialState = {
  selectedRegion: {
    id: '',
    name: '',
  },
};

const reducers = {
  selectRegion: (state, action) => {
    const { selectedRegion } = action.payload;

    return {
      ...state,
      selectedRegion,
    };
  },
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
