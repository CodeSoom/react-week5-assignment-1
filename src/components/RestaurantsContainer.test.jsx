import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import RestaurantContainer from './RestaurantsContainer';
import { restaurants } from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  it('restaurants가 존재한다면 레스토랑 리스트를 보여줍니다.', () => {
    useSelector.mockImplementation(() => ({ restaurants }));

    const { queryAllByRole } = render(<RestaurantContainer />);

    expect(queryAllByRole('listitem')).toHaveLength(restaurants.length);
  });
});
