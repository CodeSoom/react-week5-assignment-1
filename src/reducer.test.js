import {
  checkCategory, checkRegion, loadCategories, loadRegions,
} from './actions';
import reducer from './reducer';

test('reducer', () => {
  const state = {
    categories: [],
    regions: [],
    checkedCategory: undefined,
    checkedRegion: undefined,
  };
  expect(reducer(state, loadCategories()).categories).toHaveLength(1);
  expect(reducer(state, loadRegions()).regions).toHaveLength(1);
  expect(reducer(state, checkCategory(1)).checkedCategory).toBe(1);
  expect(reducer(state, checkRegion(1)).checkedRegion).toBe(1);
});
