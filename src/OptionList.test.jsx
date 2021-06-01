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
    useSelector.mockImplementation((selector) => selector(
      {
        selected: {
          category: '한식',
          region: '서울',
        },
      },
    ));
  });

  context('when option is selected', () => {
    it('renders name with (V)', () => {
      const options = ['한식', '중식', '일식', '양식', '분식'];

      const { getByRole, queryByRole } = render((
        <OptionList
          options={options}
          optionType="category"
        />
      ));

      expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
      expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();
    });
  });

  context('when option is not selected', () => {
    it('renders name without (V)', () => {
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
        optionType="category"
      />
    ));

    fireEvent.click(getByRole('button', { name: '한식(V)' }));
    expect(dispatch).toBeCalledWith(updateSelectedCategory('한식'));

    fireEvent.click(getByRole('button', { name: '중식' }));
    expect(dispatch).toBeCalledWith(updateSelectedCategory('중식'));
  });

  it('renders buttons for updating region', () => {
    const options = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    const { getByRole } = render((
      <OptionList
        options={options}
        optionType="region"
      />
    ));

    fireEvent.click(getByRole('button', { name: '서울(V)' }));
    expect(dispatch).toBeCalledWith(updateSelectedRegion('서울'));

    fireEvent.click(getByRole('button', { name: '부산' }));
    expect(dispatch).toBeCalledWith(updateSelectedRegion('부산'));
  });
});
