import {
  intializeSelectButtons,
  setSelectInfo,
} from './actions';

describe('intializeSelectButtons', () => {
  it('호출하면 intializeSelectButtons action이 반환합니다. ', () => {
    const action = intializeSelectButtons();
    expect(action).toEqual({ type: 'intializeSelectButtons' });
  });
});

describe('setSelectInfo', () => {
  it('호출하면 setSelectInfo action이 반환합니다. ', () => {
    const updateInfo = {
      type: 'lcation',
      value: '서울',
    };
    const action = setSelectInfo(updateInfo);
    expect(action).toEqual({ type: 'setSelectInfo', payload: updateInfo });
  });
});
