import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import { categories } from '../../fixtures/restaurant';
import { TYPES } from '../actions/restaurant';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  it('컴포넌트가 랜더링 된 후 분류를 가져옵니다.', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockImplementation(() => ({ categories, selected: {} }));

    render(<RestaurantCategoriesContainer />);

    expect(mockDispatch).toBeCalled();
  });

  describe('분류를 선택하면 버튼에 선택 표시가 됩니다.', () => {
    it('버튼을 선택하면 setSelectedItem이 호출됩니다.', () => {
      const mockDispatch = jest.fn();
      const { id, name } = categories[0];
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({ categories, selected: {} }));
      const { getByRole } = render(<RestaurantCategoriesContainer />);
      const button = getByRole('button', { name: new RegExp(name) });

      fireEvent.click(button);

      expect(mockDispatch).toBeCalledWith(
        expect.objectContaining({ type: TYPES.SET_SELECTED, payload: { categoryId: id } }),
      );
    });

    it('선택한 분류가 있다면 버튼에 선택 표시가 됩니다.', () => {
      const mockDispatch = jest.fn();
      const { id, name } = categories[0];
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({
        categories,
        selected: { categoryId: id },
      }));
      const { getByRole } = render(<RestaurantCategoriesContainer />);

      expect(getByRole('button', { name: new RegExp(name) })).toHaveTextContent(/V/);
    });
  });
});
