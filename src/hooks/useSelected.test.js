import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import useSelected from './useSelected';
import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../redux_module/selectedSlice';

jest.mock('react-redux');

describe('useSelected', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('returns selected', () => {
    useSelector.mockImplementation((selector) => selector({ category: '한식' }));
    const { result } = renderHook(() => useSelected('category'));

    expect(result.current.selected).toBe('한식');
  });

  it('returns setSelected for category', () => {
    const { result } = renderHook(() => useSelected('category'));

    result.current.setSelected('양식');
    expect(dispatch).toBeCalledWith(updateSelectedCategory('양식'));
  });

  it('returns setSelected for region', () => {
    const { result } = renderHook(() => useSelected('region'));

    result.current.setSelected('부산');
    expect(dispatch).toBeCalledWith(updateSelectedRegion('부산'));
  });
});
