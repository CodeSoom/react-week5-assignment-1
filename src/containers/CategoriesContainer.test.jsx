import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../fixtures/categories';

import { selectCategory } from '../store/actions';

jest.mock('react-redux');

describe('<CategoriesContainer />', () => {
  const renderCategoriesContainer = () => render((<CategoriesContainer />));

  useSelector.mockImplementation((selector) => selector({
    categories: given.categories,
    selectedCategoryId: given.selectedCategoryId,
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without categories', () => {
    given('categories', () => []);

    it('renders "카테고리를 불러오지 못했습니다."', () => {
      const { getByText } = renderCategoriesContainer();

      expect(getByText('카테고리를 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });

  context('with categories', () => {
    given('categories', () => CATEGORIES);

    it('renders categories', () => {
      const { container } = renderCategoriesContainer();

      given.categories.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });

    describe('click category', () => {
      it('dispatch selectCategory', () => {
        const category = CATEGORIES[0];

        const { getByText } = renderCategoriesContainer();

        expect(dispatch).not.toBeCalled();

        fireEvent.click(getByText(category.name));

        expect(dispatch).toBeCalledWith(selectCategory(category.id));
      });
    });

    context('with selected category id', () => {
      it('selected category is shown', () => {
        const category = CATEGORIES[0];

        given('selectedCategoryId', () => category.id);

        const { container } = renderCategoriesContainer();

        expect(container).toHaveTextContent(`${category.name}(V)`);
      });
    });

    context('without selected category id', () => {
      it('selected category is not shown', () => {
        given('selectedCategoryId', () => null);

        const { container } = renderCategoriesContainer();

        expect(container).not.toHaveTextContent('(V)');
      });
    });
  });
});
