import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../../../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants,
      search: {
        region: '서울',
        category: '1',
      },
    }));
  });

  it('renders restaurants', () => {
    const { getByText } = render(<RestaurantsContainer />);

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('loads restaurants', () => {
    render(<RestaurantsContainer />);

    expect(dispatch).toBeCalled();
  });
});
