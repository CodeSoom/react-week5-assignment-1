import { changeRegion } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  it('changeRegion', () => {
    const prevState = {
      selected: {
        regionId: null,
      },
    };

    const action = changeRegion(1);

    const state = reducer(prevState, action);

    expect(state).toEqual({
      selected: {
        regionId: 1,
      },
    });
  });

  it('changeCategory', () => {
    const changeCategory = () => {
    };

    const prevState = {
      selected: {
        categoryId: null,
      },
    };

    const action = changeCategory(1);

    const state = reducer(prevState, action);

    expect(state).toEqual({
      selected: {
        categoryId: 1,
      },
    });
  });
});
