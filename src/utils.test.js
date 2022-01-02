import { get, equal } from './utils';

describe('get', () => {
  it('함수처럼 사용했을 때 지정한 이름의 값을 가져온다', () =>{
    const state = {
      name: '홍길동',
    };
    const f = get('name');

    expect(f(state)).toBe('홍길동');
  });
});

describe('equal', () => {
  it('함수처럼 사용했을 때 값이 같은지를 따진다', () =>{
    const state = {
      name: '홍길동',
    };
    const f = equal('name', '홍길동');

    expect(f(state)).toBeTruthy();
  });
});