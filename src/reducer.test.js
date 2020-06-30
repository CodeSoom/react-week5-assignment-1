import reducer from './reducer';

test('reducer', () => {
  // when initializing reducer
  const state = reducer(undefined, 'testAction');

  // expect to have initial state with categories
  expect(state.categories).toHaveLength(2);
});
