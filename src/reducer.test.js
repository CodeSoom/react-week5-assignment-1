import {
  intializeSelectButtons,
  setSelectInfo,
} from './actions';
import reducer, { initialState } from './reducer';

describe('initialState', () => {
  it('초기 locationList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.locations).toHaveLength(0);
  });

  it('초기 foodTypeList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.foodTypes).toHaveLength(0);
  });

  it('초기 resultList는 빈 배열로 초기화됩니다.', () => {
    expect(initialState.results).toHaveLength(0);
  });

  it('초기 selecInfo의 location이 빈 값으로 초기화됩니다.', () => {
    expect(initialState.selectInfo.location).toBe('');
  });

  it('초기 selecInfo의 foodType이 빈 값으로 초기화됩니다.', () => {
    expect(initialState.selectInfo.foodType).toBe('');
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

  describe('intializeSelectButtons', () => {
    it('locations, foddTypes, results를 주어진 값으로 초기화합니다.', () => {
      const { locations, foodTypes, results } = reducer(
        initialState,
        intializeSelectButtons({ type: 'intializeSelectButtons' })
      );

      expect(locations).toEqual(['서울', '대전', '대구', '부산', '광주', '강원도', '인천']);
      expect(foodTypes).toEqual(['한식', '중식', '일식', '양식', '분식']);
      expect(results).toEqual(['양천주가', '밀면넘어져요']);
    });
  });

  describe('setSelectInfo', () => {
    it('selectInfo의 location을 value로 설정합니다.', () => {
      const { selectInfo: { location } } = reducer(
        initialState,
        setSelectInfo({ type: 'location', value: '서울' })
      );

      expect(location).toBe('서울');
    });
  });

  it('selectInfo의 foodType을 value로 설정합니다.', () => {
    const { selectInfo: { foodType } } = reducer(
      initialState,
      setSelectInfo({ type: 'foodType', value: '한식' })
    );

    expect(foodType).toBe('한식');
  });
});
