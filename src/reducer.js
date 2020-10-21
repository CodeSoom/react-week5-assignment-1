const initialState = {
  newId: 100,
  region: {
    id: '',
    name: '',
    checked: '',
  },
  regions: [],
};

const reducers = {

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
