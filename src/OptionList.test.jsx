import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import OptionList from './OptionList';
import {
  updateSelectedCategory,
  updateSelectedRegion,
} from './selectedSlice';

jest.mock('react-redux');

describe('OptionList', () => {
  it('renders option that V for selected', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ category: '한식' }));

    const options = ['한식', '중식', '일식', '양식', '분식'];

    const { getByRole } = render((
      <OptionList
        options={options}
        mode="category"
      />
    ));

    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
  });

  it('store selected category', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector([]));

    const options = ['한식', '중식', '일식', '양식', '분식'];

    const { getByRole } = render((
      <OptionList
        options={options}
        mode="category"
      />
    ));

    fireEvent.click(getByRole('button', { name: '한식' }));
    expect(dispatch).toBeCalledWith(updateSelectedCategory('한식'));
  });

  it('store selected region', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector([]));

    const options = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    const { getByRole } = render((
      <OptionList
        options={options}
        mode="region"
      />
    ));

    fireEvent.click(getByRole('button', { name: '서울' }));
    expect(dispatch).toBeCalledWith(updateSelectedRegion('서울'));
  });
});
