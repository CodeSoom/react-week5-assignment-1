import reducer from './reducer';

test('reducer', () => {
  const state = reducer();

  expect(state).toHaveLength(0);
});
