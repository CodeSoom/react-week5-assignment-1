import {
  setSelectButtons,
} from './actions';

describe('setSelectButtons', () => {
  it('호출하면 setSelectButtons action이 반환합니다. ', () => {
    const action = setSelectButtons();
    expect(action).toEqual({ type: 'setSelectButtons' });
  });
});