import {
  intializeSelectButtons,
  setSelectedButton,
} from './actions';
import reducer, { initialState } from './reducer';

describe('initialState', () => {
  it('초기 state가 초기화됩니다.', () => {
    expect(initialState).toEqual({
      locations: [],
      foodTypes: [],
      restaurants: [],
      selectedButtons: {
        location: '',
        foodType: '',
      },
    });
  });
});

describe('reducer', () => {
  it('정의되어 있지 않은 action을 입력하면 현재 state이 반환합니다.', () => {
    const state = reducer(
      initialState,
      { type: 'incorrectType', payload: { type: '', value: '' } },
    );

    expect(state).toEqual(initialState);
  });

  describe('intializeSelectButtons', () => {
    it('locations, foddTypes, restaurants를 주어진 값으로 초기화합니다.', () => {
      const { locations, foodTypes, restaurants } = reducer(
        initialState,
        intializeSelectButtons({ type: 'intializeSelectButtons' }),
      );

      expect(locations).toEqual([{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }]);
      expect(foodTypes).toEqual([{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }]);
      expect(restaurants).toEqual([{ id: 1, name: '양천주가' }, { id: 2, name: '밀면넘어져요' }]);
    });
  });

  describe('setSelectedButton', () => {
    it('setSelectedButtons의 location을 value로 설정합니다.', () => {
      const { selectedButtons: { location } } = reducer(
        initialState,
        setSelectedButton({ type: 'location', value: '서울' }),
      );

      expect(location).toBe('서울');
    });
  });

  it('setSelectedButton의 foodType을 value로 설정합니다.', () => {
    const { selectedButtons: { foodType } } = reducer(
      initialState,
      setSelectedButton({ type: 'foodType', value: '한식' }),
    );

    expect(foodType).toBe('한식');
  });
});
