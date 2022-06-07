import { findRegion } from './helper';

test('findRegion', () => {
  const regions = [{ id: 1, name: '서울' }, { id: 2, name: '부산' }];
  expect(findRegion(regions, 1)).toEqual({ id: 1, name: '서울' });
  expect(findRegion(regions, 2)).toEqual({ id: 2, name: '부산' });
});
