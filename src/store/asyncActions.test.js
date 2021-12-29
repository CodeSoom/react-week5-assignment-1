import { loadRegions } from './asyncActions';
import { setRegions } from './actions';

jest.mock('../services/index.js');

describe('asyncActions', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRegions', () => {
    it('loadRegions 는 api 통신 후 setRegions 를 dispatch 한다.', () => {
      const callback = loadRegions();

      callback.call(this, dispatch);
      expect(dispatch).toBeCalled();
      // TODO test 실패
      expect(dispatch).toBeCalledWith(setRegions([])); // 테스트 실패 ㅠ
    });
  });
});
