import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');

  expect(f(state)).toBe('홍길동');
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '김세림');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});
