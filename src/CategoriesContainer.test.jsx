import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../fixtures/data';

import { selectCategory } from './actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('카테고리 목록이 랜더링된다', () => {
    renderCategoriesContainer(categories);

    expect(screen.getByText('분식')).not.toBeNull();
  });

  it('dispatch가 실행된다', () => {
    const category = categories[0];
    renderCategoriesContainer(category);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(screen.getByText(category.name));

    expect(dispatch).toBeCalledWith(selectCategory(category.id));
  });
});
