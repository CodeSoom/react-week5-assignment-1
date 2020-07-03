import * as actions from './actions';

test('set region', () => {
  const regionItem = { id: 1, name: '서울' };
  const action = actions.setRegions([regionItem]);
  expect(action.type).toBe('setRegions');
  expect(action.payload.regions).toEqual([regionItem]);
});

test('set categories', () => {
  const categoryItem = [{ id: 1, name: '한식' }];
  const action = actions.setCategories(categoryItem);
  expect(action.type).toBe('setCategories');
  expect(action.payload.categories).toEqual(categoryItem);
});

test('set categoryId', () => {
  const categoryId = 1;
  const action = actions.setCategoryId(categoryId);
  expect(action.type).toBe('setCategoryId');
  expect(action.payload.categoryId).toEqual(categoryId);
});

test('set region name', () => {
  const regionName = '서울';
  const action = actions.setRegionName(regionName);
  expect(action.type).toBe('setRegionName');
  expect(action.payload.regionName).toEqual(regionName);
});

test('load categories', () => {
  const action = actions.loadCategories();
  expect(action).not.toBeNull();
});

test('load regions', () => {
  const action = actions.loadRegions();
  expect(action).not.toBeNull();
});
