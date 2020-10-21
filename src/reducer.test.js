import reducer from './reducer';

describe('reducer', () => {
  const initialState = {
    newId: 100,
    region: {
      id: '',
      name: '',
      checked: '',
    },
    regions: [],
  };

  it('init state', () => {
    const state = reducer();
    expect(state).toStrictEqual(initialState);
  });

  it('unknown reducer', () => {
    const state = reducer(initialState, {
      type: 'unknownAction',
      payload: {
        name: 'unknown',
      },
    });
    expect(initialState).toBe(state);
  });
});
