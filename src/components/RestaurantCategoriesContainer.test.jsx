import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import { categories } from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  it('컴포넌트가 랜더링 된 후 분류를 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation(() => ({ categories }));

    render(<RestaurantCategoriesContainer />);

    expect(mockDispatch).toBeCalled();
  });
});
