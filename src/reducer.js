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
    const { region, category } = state;
    const { item } = action.payload;
    // item이 (V) 포함이면 (V) 지워버림
    // item이 region에 있는 애면 거기에 (V)함
    // item이 category에 있는 애면 거기에 (V)함
    if (item.indexOf('(V)') === -1 && region.indexOf(item) > -1) {
      region.splice(region.indexOf(item), 1, item.concat('(V)'));
    }

    if (item.indexOf('(V)') === -1 && category.indexOf(item) > -1) {
      category.splice(category.indexOf(item), 1, item.concat('(V)'));
    }

    return {
      ...state,
    };
  }
  return state;
}
