import reducer from './reducer';

import {
  checkRegion,
  checkCategory,
} from './actions';

describe('reducer', () => {
  describe('checkRegion', () => {
    context('with V sign', () => {
      const state = reducer({
        regionId: 1,
        regions: [
          { id: 1, name: '서울' },
        ],
      }, checkRegion(1));

      expect(state.regions[0].name).toBe('서울');
    });

    context('without V sign', () => {
      const state = reducer({
        regionId: 0,
        regions: [
          { id: 1, name: '서울' },
        ],
      }, checkRegion(1));

      expect(state.regions[0].name).toBe('서울(V)');
    });
  });

  it('checkCategory', () => {
    const state = reducer({
      categories: [
        { id: 1, name: '한식' },
      ],
    }, checkCategory(1));

    expect(state.categories[0].name).toBe('한식(V)');
  });
});
