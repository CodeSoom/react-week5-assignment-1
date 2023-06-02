import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  jest.mock('react-redux');
  jest.mock('./services/api');

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({
    restaurantData: [
      { id: 1, name: '코코식당' }, { id: 2, name: '네네식당' },
    ],
  }));

  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  it('식당 리스트가 보인다', () => {
    const { getByText } = renderRestaurantsContainer();
    expect(getByText('코코식당')).not.toBeNull();
  });
  it('선택된 식당이 변경되면 해당 식당이 보인다. ', () => {
    useSelector.mockImplementation(() => ({
      restaurantData: [
        { id: 1, name: '바뀐식당' }, { id: 2, name: '이렇게' },
      ],
    }));
    const { getByText } = renderRestaurantsContainer();
    expect(getByText('바뀐식당')).not.toBeNull();
  });
});
