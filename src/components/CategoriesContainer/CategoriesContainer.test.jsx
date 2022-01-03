import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';
import CategoriesContainer from './CategoriesContainer';
import { setCategory } from '../../reducer/actions';
import { categories } from '../../fixtures';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  given('categories', () => []);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: given.categories,
    }));
  });

  it('컴포넌트 mount시, 음식종류들을 불러온다.', async () => {
    render(<CategoriesContainer />);

    expect(dispatch).toBeCalled();
  });

  context('음식 카테고리 목록이 있을 때', () => {
    given('categories', () => categories);

    it('카테고리를 클릭하면 콜백함수가 실행된다.', () => {
      const { getByText } = render(<CategoriesContainer />);

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(setCategory({ id: 1, name: '한식', selected: false }));
    });
  });
});
