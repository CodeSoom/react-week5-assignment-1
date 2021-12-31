import reducer, { initialState } from './reducer';
import { setInitialState, changeRegion, changeCategory } from './actions';

describe('reducer', () => {
  // load 되는 액션 크리에이터도 검사할 수 있을까?
  it('Set Restaurant regions, categories Basic API data', () => {
    const state = reducer(
      initialState,
      setInitialState(
        [
          { id: 1, name: '서울' },
          { id: 2, name: '부산' },
        ],
        [{ id: 1, name: '한식' }],
      ),
    );

    expect(state.Regions).toHaveLength(2);
    expect(state.Categories).toHaveLength(1);
  });

  context('when Regions button Clicked', () => {
    it('change currentRegion state', () => {
      const state = reducer(initialState, changeRegion(1));

      expect(state.currentRegion).toBe(1);
    });
  });

  context('when Categories button Clicked', () => {
    it('change currentCategory state', () => {
      const state = reducer(initialState, changeCategory(2));

      expect(state.currentCategory).toBe(2);
    });
  });
});
