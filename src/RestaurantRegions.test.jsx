import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

describe('RestaurantRegions', () => {
  context('with fetch data', () => {
    it('renders regions', () => {
      const handleClick = jest.fn();

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

      const { getByText } = render(<RestaurantRegions regions={regions} onClick={handleClick} />);

      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();

      expect(getByText('서울')).not.toBeNull();
      expect(getByText('대전')).not.toBeNull();
    });
  });
});
