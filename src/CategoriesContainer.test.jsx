import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent, screen } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  function renderCategoriesContainer() {
    return render((<CategoriesContainer />));
  }

  it('카테고리가 랜더링된다', () => {
    renderCategoriesContainer();

    expect(screen.getByText(/한식/)).not.toBeNull();
  });

  //
  it('카테고리 한식을 클릭하면 dispatch가 실행된다', () => {
    renderCategoriesContainer();

    fireEvent.click(screen.getByText(/한식/));

    expect(dispatch).toBeCalled();
  });
});
