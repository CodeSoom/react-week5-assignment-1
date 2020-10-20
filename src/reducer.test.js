import {
  setSelectButtons,
} from './actions';
import reducer, { initialState } from './reducer';

describe('initialState', () => {
  it('초기 locationList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.locationList).toHaveLength(0);
  });

  it('초기 foodTypeList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.foodTypeList).toHaveLength(0);
  });

  it('초기 resultList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.resultList).toHaveLength(0);
  });

});

describe('reducer', () => {
  it('잘못된 action을 입력하면 현재 state이 반환합니다.', () => {
    const state = reducer(
      initialState,
      { type: 'incorrectType', payload: { type: '', value: '' } },
    );

    expect(state).toEqual(initialState);
  });

  describe('setSelectButtons', () => {
    it('state를 주어진 값으로 설정합니다.', () => {
      const { locationList, foodTypeList, resultList } = reducer(
        initialState,
        setSelectButtons({ type: 'setSelectButtons' })
      );

      expect(locationList).toEqual(['서울', '대전', '대구', '부산', '광주', '강원도', '인천']);
      expect(foodTypeList).toEqual(['한식', '중식', '일식', '양식', '분식']);
      expect(resultList).toEqual(['양천주가', '밀면넘어져요']);
    });
  });
});