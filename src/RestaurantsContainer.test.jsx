import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restuarants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restuarants,
  }));

  context('with restuarants', () => {
    it('카테고리 항목들이 보인다.', () => {
      const { getByText } = render(
        <RestaurantsContainer />,
      );

      restuarants.forEach((restaurant) => {
        const { name } = restaurant;
        const regExp = new RegExp(name);
        expect(getByText(regExp)).not.toBeNull();
      });
    });
  });
});
