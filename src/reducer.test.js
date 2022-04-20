import reducer from './reducer';

import { setRegionList } from './action';

test('setRegionList', () => {
  const RegionList = [];
  const state = reducer(
    RegionList, setRegionList(RegionList),
  );
  expect(state.RegionList).toHaveLength(1);
});
