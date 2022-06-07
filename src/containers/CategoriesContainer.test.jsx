import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../../fixtures/categories';

import { changeCategoryId } from '../actions';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('분류를 클릭하면 "changeCategoryId"을 dispatch한다', () => {
    const { getByRole } = render(<CategoriesContainer />);

    const clickedButton = categories[0];

    fireEvent.click(getByRole('button', { name: clickedButton.name }));

    expect(dispatch).toBeCalledWith(changeCategoryId(clickedButton));
  });
});
