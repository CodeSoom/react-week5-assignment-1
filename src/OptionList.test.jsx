import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import OptionList from './OptionList';
import {
  updateSelectedCategory,
  updateSelectedRegion,
} from './redux_module/selectedSlice';

jest.mock('react-redux');

describe('OptionList', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector([]));
  });

  it('renders name with (V) for selected option', () => {
    useSelector.mockImplementation((selector) => selector({ category: '한식' }));

    const options = ['한식', '중식', '일식', '양식', '분식'];

    const { getByRole } = render((
      <OptionList
        options={options}
        mode="category"
      />
    ));

    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
    expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
  });

  it('stores selected category', () => {
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

  it('stores selected region', () => {
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
