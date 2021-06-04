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
        categoryId: 1,
      },
    }));
  });

  it('renders restaurants', () => {
    const { getByText } = render(<RestaurantsContainer />);

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  context('when regions and categories exist', () => {
    it('loads restaurants', () => {
      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalled();
    });
  });

  context('when regions and categories doesn\'t exist', () => {
    it('doesn\'t loads restaurants without region', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
        search: {
          region: '',
          categoryId: 1,
        },
      }));

      render(<RestaurantsContainer />);

      expect(dispatch).not.toBeCalled();
    });

    it('doesn\'t loads restaurants without category', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
        search: {
          region: '서울',
          categoryId: '',
        },
      }));

      render(<RestaurantsContainer />);

      expect(dispatch).not.toBeCalled();
    });
  });
});
