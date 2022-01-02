import { get, equal } from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  expect(get('name')(state)).toBe('홍길동');
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  expect(equal('name', '홍길동')(state)).toBeTruthy();
  expect(equal('name', '임꺽정')(state)).toBeFalsy();
});
