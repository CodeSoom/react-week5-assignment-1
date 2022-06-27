import { get } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };
  const f = get('name');

  expect(f(state)).toBe('홍길동');
});
