import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  context('with fetch data', () => {
    it('renders regions', () => {
      const regions = [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '대전',
        },
      ];

      const { getByText } = render(<RestaurantRegions regions={regions} />);

      expect(getByText('서울')).not.toBeNull();
      expect(getByText('대전')).not.toBeNull();
    });
  });
});
