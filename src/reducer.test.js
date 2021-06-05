import reducer from './reducer';

import {
  checkRegion,
  checkCategory,
} from './actions';

describe('reducer', () => {
  it('checkRegion', () => {
    const state = reducer({
      regions: [
        { id: 1, name: '서울' },
      ],
    }, checkRegion(1));

    expect(state.regions[0].name).toBe('서울(V)');
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