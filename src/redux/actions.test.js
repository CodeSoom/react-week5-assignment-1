import { loadRegions, setRegions, serErrorMessage } from './actions';

import regions from '../../fixture/regions';

import { fetchRegions } from '../services/api';

jest.mock('../services/api', () => ({
  fetchRegions: jest.fn(),
}));

describe('redux actions loadRegions', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(regions);
    });

    test('setRegions가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setRegions(regions));
    });

    context('호출이 실패하면', () => {
      const error = '지역 목록을 가져오지 못했어요.';

      beforeEach(() => {
        fetchRegions.mockRejectedValue(new Error(error));
      });

      test('setErrorMessage가 호출된다.', async () => {
        const dispatch = jest.fn();

        await loadRegions()(dispatch);

        expect(dispatch).toHaveBeenLastCalledWith(serErrorMessage(error));
      });
    });
  });
});
