import check from './utils';

import regions from './__fixtures__/regions';

test('check the specific id element.', () => {
  // given
  const region = regions[0];
  // when
  const checkedRegion = check(region, 1);
  // then
  expect(checkedRegion.id).toBe(1);
  expect(checkedRegion.name).toBe(`${region.name}(v)`);
});

test('do not check if id not match', () => {
  // given
  const region = regions[0];
  // when
  const checkedRegion = check(region, 2);
  // then
  expect(checkedRegion.id).toBe(1);
  expect(checkedRegion.name).not.toBe(`${region.name}(v)`);
});
