import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  context('When restaurnat into restaurants', () => {
    it('Shows restaurant', () => {
      const restaurants = [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구',
          information: '양천주가 in 서울 강남구',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { queryByText } = render((
        <RestaurantsContainer />
      ));

      expect(queryByText('양천주가')).not.toBeNull();
    });
  });

  context('When restaurnat not into restaurants', () => {
    it('Do not shows restaurant', () => {
      const restaurants = [];

      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { queryByText } = render((
        <RestaurantsContainer />
      ));

      expect(queryByText('양천주가')).toBeNull();
    });
  });
});
