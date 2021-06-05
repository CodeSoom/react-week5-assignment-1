import reducer from './reducer';

describe('reducer', () => {
  it('checkRegion', () => {
    const previousState = {
      regions: [
        { id: 1, name: '서울' },
      ],
    };

    const action = {
      type: 'checkRegion',
      payload: {
        id: 1,
      },
    };

    const state = reducer(previousState, action);

    expect(state.regions[0].name).toBe('서울(V)');
  });
});