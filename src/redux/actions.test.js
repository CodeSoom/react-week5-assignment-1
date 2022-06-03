import {
  loadRegions, setRegions, loadCategories, setCategories, setErrorMessage,
} from './actions';

import regions from '../../fixture/regions';
import categories from '../../fixture/categories';

import { fetchRegions, fetchCategories } from '../services/api';

jest.mock('../services/api', () => ({
  fetchRegions: jest.fn(),
  fetchCategories: jest.fn(),
}));

describe('redux actions loadRegions', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchRegions.mockResolvedValue(regions);
    });

    it('setRegions가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setRegions(regions));
    });
  });

  context('호출이 실패하면', () => {
    const error = new Error('지역 목록을 가져오지 못했어요.');

    beforeEach(() => {
      fetchRegions.mockRejectedValue(error);
    });

    it('setErrorMessage가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadRegions()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(setErrorMessage(error.message));
    });
  });
});

describe('redux actions loadCategories', () => {
  context('호출이 성공하면', () => {
    beforeEach(() => {
      fetchCategories.mockResolvedValue(categories);
    });

    it('setCategories가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setCategories(categories));
    });
  });

  context('호출이 실패하면', () => {
    const error = new Error('업종 목록을 가져오지 못했어요.');

    beforeEach(() => {
      fetchCategories.mockRejectedValue(error);
    });

    it('setErrorMessage가 호출된다.', async () => {
      const dispatch = jest.fn();

      await loadCategories()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(setErrorMessage(error.message));
    });
  });
});
