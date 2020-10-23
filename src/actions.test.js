import {
  intializeSelectButtons,
  setSelectedButton,
} from './actions';

describe('intializeSelectButtons', () => {
  it('intializeSelectButtons action이 반환합니다. ', () => {
    const action = intializeSelectButtons();
    expect(action).toEqual({ type: 'intializeSelectButtons' });
  });
});

describe('setSelectedButton', () => {
  it('setSelectedButton action이 반환합니다. ', () => {
    const selectedButton = {
      type: 'lcation',
      value: '서울',
    };
    const action = setSelectedButton(selectedButton);
    expect(action).toEqual({ type: 'setSelectedButton', payload: selectedButton });
  });
});
