import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import useSelectedOption from './useSelectedOption';
import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../redux_module/selectedSlice';

jest.mock('react-redux');

describe('useSelectedOption', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('returns selected', () => {
    useSelector.mockImplementation((selector) => selector(
      { selected: { category: '한식' } },
    ));
    const { result } = renderHook(() => useSelectedOption('category'));

    expect(result.current.selected).toBe('한식');
  });

  context("when 'category' is given for optionType", () => {
    it('returns setSelected for updating category', () => {
      const { result } = renderHook(() => useSelectedOption('category'));

      result.current.setSelected('양식');
      expect(dispatch).toBeCalledWith(updateSelectedCategory('양식'));
    });
  });

  context("when 'region' is given for optionType", () => {
    it('returns setSelected for updating region', () => {
      const { result } = renderHook(() => useSelectedOption('region'));

      result.current.setSelected('부산');
      expect(dispatch).toBeCalledWith(updateSelectedRegion('부산'));
    });
  });
});
