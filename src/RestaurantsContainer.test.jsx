import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  describe('render title', () => {
    context('without selections', () => {
      it('shows a message', () => {
        const { getByText } = render(<RestaurantsContainer />);

        expect(getByText(/지역과 분류를 선택해주세요/)).not.toBeNull();
      });
    });

    context('with selections region and category', () => {
      it('shows a title', () => {
        useSelector.mockImplementation((selector) => selector({
          selectedRegionId: 1,
          selectedCategoryId: 1,
        }));

        const { getByText } = render(<RestaurantsContainer />);

        expect(getByText('레스토랑 목록')).not.toBeNull();
      });
    });
  });

  describe('list up restaurants', () => {
    context('with restaurants', () => {
      it('one or more restaurants', () => {
        // TODO: Check API fetch correct properties of a restaurant
      });
    });

    context('without restaurants', () => {
      it('empty restaurants', () => {
        // TODO: Check API fetch empty restaurants
      });
    });
  });
});
