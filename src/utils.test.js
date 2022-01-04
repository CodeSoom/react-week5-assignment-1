import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  expect(get('name')(state)).toBe('홍길동');
  expect(get('age')(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    category: {
      id: 1,
      name: '한식',
    },
  };

  expect(equal('id', 1)(state.category)).toBeTruthy();
});
