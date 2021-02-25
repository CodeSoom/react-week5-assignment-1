import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  context('without restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = render(<RestaurantsContainer />);

      expect(queryByText(/레스토랑 목록이 없습니다/)).not.toBeNull();
    });
  });
});
