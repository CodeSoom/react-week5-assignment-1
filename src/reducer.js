import regions from '../fixtures/region';
import categories from '../fixtures/category';

const initalState = {
  region: regions,
  category: categories,
};

export default function reducer(state = initalState, action = { type: '' }) {
  if (action.type === 'setItems') {
    const { region, category } = action.payload;
    return {
      ...state,
      region,
      category,
    };
  }

  if (action.type === 'getRestaurant') {
    console.log('button pushed');
    return {
      ...state,
    };
  }
  return state;
}
