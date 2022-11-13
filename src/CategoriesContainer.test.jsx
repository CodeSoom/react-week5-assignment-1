import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const { getByText } = render((
    <CategoriesContainer />
  ));

  it('카테고리가 랜더링된다', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    expect(getByText(/한식/)).not.toBeNull();
  });

  //
  it('카테고리 한식을 눌렀더니 한식이 선택이 됐다 ?', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    fireEvent.click(getByText(/한식/));

    expect(dispatch).toBeCalled();
  });
});
