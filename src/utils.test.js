import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '김세현',
  };
  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('김세현');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '김수빈',
  };

  const f = equal('name', '김수빈');
  const g = equal('name', '유지민');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});
