const initialState = {
  categories: [],
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === '') {
    return state;
  }
  return state;
}
