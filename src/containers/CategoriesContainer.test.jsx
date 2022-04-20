import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';
import 'given2/setup';

import { updateCategoryId } from '../redux/actions';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  given('categories', () => [{
    id: 1,
    name: '한식',
  }]);

  useSelector.mockImplementation((selector) => selector({
    categories: given.categories,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategoriesContainer() {
    return render(<CategoriesContainer />);
  }

  context('with categories', () => {
    it('renders categories', () => {
      given('categories', () => [{
        id: 1,
        name: '한식',
      }]);
      const { queryByText } = renderCategoriesContainer();

      expect(queryByText(/한식/)).not.toBeNull();
    });

    it('updates categoryId when button clicked', () => {
      given('categories', () => [{
        id: 1,
        name: '한식',
      }]);
      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(updateCategoryId({ categoryId: 1 }));
    });
  });

  context('without categories', () => {
    it('renders "카테고리가 없어요!"', () => {
      given('categories', () => []);

      const { container } = renderCategoriesContainer();
      expect(container).toHaveTextContent(/카테고리가 없어요!/);
    });
  });
});
