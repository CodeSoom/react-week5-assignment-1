import {
  intializeSelectButtons,
  setSelectedButton,
} from './actions';

describe('intializeSelectButtons', () => {
  it('intializeSelectButtons action이 반환합니다. ', () => {
    const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }];
    const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }];

    const action = intializeSelectButtons({ regions, categories });
    expect(action).toEqual({ type: 'intializeSelectButtons', payload: { regions, categories } });
  });
});

describe('setSelectedButton', () => {
  it('setSelectedButton action이 반환합니다. ', () => {
    const selectedButton = {
      type: 'region',
      value: '서울',
    };
    const action = setSelectedButton(selectedButton);
    expect(action).toEqual({ type: 'setSelectedButton', payload: selectedButton });
  });
});
