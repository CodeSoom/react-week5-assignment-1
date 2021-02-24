const initialItems = {};

export default function reducer(state = initialItems, action = { type: '' }) {
  if (action.type === 'test') {
    return state;
  }

  return state;
}
