import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const { getByText } = render((
    <RestaurantsContainer />
  ));

  it('레스토랑이 랜더링된다', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '맛나' },
      ],
    }));

    expect(getByText(/맛나/)).not.toBeNull();
  });
});
