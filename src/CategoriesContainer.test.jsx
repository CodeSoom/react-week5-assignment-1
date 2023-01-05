import { screen, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [],
  }));

  it('카테고리 리스트를 화면에 렌더한다.', () => {
    render(<CategoriesContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
