import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import OptionList from './OptionList';
import {
  selectCategory,
  selectRegion,
} from '../redux_module/selectedSlice';

jest.mock('react-redux');

function renderCategoryList() {
  const options = ['한식', '중식', '일식', '양식', '분식'];

  return render((
    <OptionList
      options={options}
      optionType="category"
    />
  ));
}

function renderRegionList() {
  const options = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

  return render((
    <OptionList
      options={options}
      optionType="region"
    />
  ));
}

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
      const { getByRole, queryByRole } = renderCategoryList();

      expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
      expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();
    });
  });

  context('when option is not selected', () => {
    it('renders name without (V)', () => {
      const { getByRole, queryByRole } = renderCategoryList();

      expect(queryByRole('button', { name: '중식(V)' })).not.toBeInTheDocument();
      expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
    });
  });

  it('renders buttons for updating category', () => {
    const { getByRole } = renderCategoryList();

    fireEvent.click(getByRole('button', { name: '한식(V)' }));
    expect(dispatch).toBeCalledWith(selectCategory('한식'));

    fireEvent.click(getByRole('button', { name: '중식' }));
    expect(dispatch).toBeCalledWith(selectCategory('중식'));
  });

  it('renders buttons for updating region', () => {
    const { getByRole } = renderRegionList();

    fireEvent.click(getByRole('button', { name: '서울(V)' }));
    expect(dispatch).toBeCalledWith(selectRegion('서울'));

    fireEvent.click(getByRole('button', { name: '부산' }));
    expect(dispatch).toBeCalledWith(selectRegion('부산'));
  });
});
