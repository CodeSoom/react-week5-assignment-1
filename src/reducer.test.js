import reducer from './reducer';

import { setRegionList } from './action';

test('setRegionList', () => {
  const regionList = [
    {
      id: 1,
      name: '서울',
    },
  ];
  const initialState = {
    regionList: [],
  };
  const state = reducer(
    initialState, setRegionList(regionList),
  );
  expect(state.regionList).toHaveLength(1);
});
