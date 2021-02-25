import regions from '../fixtures/region';

const initialItems = regions;

const initalState = {
  items: initialItems,
};

export default function reducer(state = initalState, action = { type: '' }) {
  if (action.type === 'setItems') {
    const { items } = action.payload;
    return {
      ...state,
      items,
    };
  }

  return state;
}
