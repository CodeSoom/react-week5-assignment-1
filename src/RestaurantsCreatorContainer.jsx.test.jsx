import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { addRestaurant, updateRestaurantInput } from './actions';
import { initialState } from './reducer';

import RestaurantsCreatorContainer from './RestaurantsCreatorContainer';

jest.mock('react-redux');

describe('RestaurantsCreatorContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('renders inputs & button', () => {
    useSelector.mockImplementation((selector) => selector(initialState));
    const {
      container,
      queryByPlaceholderText,
      getByText,
    } = render(<RestaurantsCreatorContainer />);

    expect(queryByPlaceholderText('이름'));
    expect(queryByPlaceholderText('분류'));
    expect(queryByPlaceholderText('주소'));
    expect(container).toHaveTextContent('등록');

    expect(dispatch).not.toBeCalledWith(addRestaurant());
    fireEvent.click(getByText('등록'));
    expect(dispatch).toBeCalledWith(addRestaurant());
  });

  it('renders updated input value', () => {
    useSelector.mockImplementation((selector) => selector(initialState));
    const { queryByPlaceholderText } = render(<RestaurantsCreatorContainer />);

    expect(queryByPlaceholderText('이름')).toHaveDisplayValue('');
    expect(queryByPlaceholderText('분류')).toHaveDisplayValue('');
    expect(queryByPlaceholderText('주소')).toHaveDisplayValue('');

    fireEvent.change(queryByPlaceholderText('이름'), { target: { value: '이름' } });
    expect(dispatch).toBeCalledWith(updateRestaurantInput('name', '이름'));

    fireEvent.change(queryByPlaceholderText('분류'), { target: { value: '분류' } });
    expect(dispatch).toBeCalledWith(updateRestaurantInput('category', '분류'));

    fireEvent.change(queryByPlaceholderText('주소'), { target: { value: '주소' } });
    expect(dispatch).toBeCalledWith(updateRestaurantInput('address', '주소'));
  });
});
