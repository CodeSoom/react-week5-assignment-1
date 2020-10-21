import reducer from './reducer';

test('reducer', () => {
  const state = reducer();

  expect(state.regions).toHaveLength(0);
});
