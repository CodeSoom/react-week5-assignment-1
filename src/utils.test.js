import { get, equal } from './utils';

describe('get', () => {
  it('key의 value를 확인한다', () => {
    const state = {
      name: '홍길동',
    };

    const f = get('name');
    const g = get('age');

    expect(f(state)).toBe('홍길동');
    expect(g(state)).toBeUndefined();
  });
});

describe('equal', () => {
  it('key의 value가 일치하는지 확인한다', () => {
    const state = {
      name: '홍길동',
    };

    const f = equal('name', '홍길동');
    const g = equal('name', '홍홍');

    expect(f(state)).toBeTruthy();
    expect(g(state)).toBeFalsy();
  });
});
