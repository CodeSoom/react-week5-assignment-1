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

  context('when option is selected', () => {
    it('renders name with (V)', () => {
      useSelector.mockImplementation((selector) => selector({ category: '한식' }));
      const options = ['한식', '중식', '일식', '양식', '분식'];
      const { getByRole, queryByRole } = render((
        <OptionList
          options={options}
          mode="category"
        />
      ));

      expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
      expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();
    });
  });

  context('when option is not selected', () => {
    it('renders name without (V)', () => {
      useSelector.mockImplementation((selector) => selector({ category: '한식' }));
      const options = ['한식', '중식', '일식', '양식', '분식'];
      const { getByRole, queryByRole } = render((
        <OptionList
          options={options}
          mode="category"
        />
      ));

      expect(queryByRole('button', { name: '중식(V)' })).not.toBeInTheDocument();
      expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
    });
  });

  it('renders buttons for updating category', () => {
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

  it('renders buttons for updating region', () => {
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
