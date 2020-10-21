const initialState = {
  selectedRegionId: 0,
  regions: [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '광주' },
  ],
};

const reducers = {
  selectRegion: (state, action) => ({
    ...state,
    selectedRegionId: action.payload.id,
  }),
};

function unknownReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  if (typeof action === 'undefined') {
    return state;
  }

  return (reducers[action.type] || unknownReducer)(state, action);
}
