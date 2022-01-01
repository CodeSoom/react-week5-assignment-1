import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import { setCategory } from '../../reducer/actions';
import { categories } from '../../fixtures';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('컴포넌트 mount시, 음식종류들을 불러온다.', async () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [],
    }));

    render(<CategoriesContainer />);
    expect(dispatch).toBeCalled();
  });

  it('음식 종류를 클릭하면 콜백함수에 클릭한 음식종류를 전달하여 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith(setCategory({ id: 1, name: '한식', selected: false }));
  });
});
