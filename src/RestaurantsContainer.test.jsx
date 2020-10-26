import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  describe('render title', () => {
    context('without selections', () => {
      it('shows a message to select region and category', () => {
        const { getByText } = render(<RestaurantsContainer />);

        expect(getByText(/지역과 분류를 선택해주세요/)).not.toBeNull();
      });
    });

    context('with selections region and category', () => {
      it('render restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          selectedRegionId: 1,
          selectedCategoryId: 1,
        }));

        const { getByText } = render(<RestaurantsContainer />);

        expect(getByText('레스토랑 목록')).not.toBeNull();
      });
    });
  });
});
