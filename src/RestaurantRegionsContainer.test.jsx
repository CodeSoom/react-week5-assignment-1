import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantRegionContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('레스토랑 지역 목록을 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
