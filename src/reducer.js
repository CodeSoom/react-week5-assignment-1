const reducers = {

};

function unknownReducer(state) {
  return state;
}

export default function reducer(state, action) {
  if (typeof action === 'undefined') {
    return state;
  }

  return (reducers[action.type] || unknownReducer)(state, action);
}
