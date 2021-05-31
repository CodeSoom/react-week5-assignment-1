import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';

import useSelected from './useSelected';
import {
  updateSelectedCategory,
  updateSelectedRegion,
} from '../selectedSlice';

jest.mock('react-redux');

describe('useSelected', () => {
  it('returns selected', () => {
    useSelector.mockImplementation((selector) => selector({ category: '한식' }));
    const { result } = renderHook(() => useSelected('category'));
    expect(result.current.selected).toBe('한식');
  });

  it('returns setSelected for category', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ category: '한식' }));

    const { result } = renderHook(() => useSelected('category'));
    result.current.setSelected('양식');
    expect(dispatch).toBeCalledWith(updateSelectedCategory('양식'));
  });

  it('returns setSelected for region', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ category: '서울' }));

    const { result } = renderHook(() => useSelected('region'));
    result.current.setSelected('부산');
    expect(dispatch).toBeCalledWith(updateSelectedRegion('부산'));
  });
});
