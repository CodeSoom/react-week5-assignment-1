import { loadCategories, loadRegions } from './actions';
import reducer from './reducer';

test('reducer', () => {
  const state = {
    categories: [],
    regions: [],
  };
  expect(reducer(state, loadCategories()).categories).toHaveLength(1);
  expect(reducer(state, loadRegions()).regions).toHaveLength(1);
});
