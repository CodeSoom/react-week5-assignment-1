import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data';

describe('<RegionsContainer />', () => {
  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {
      const { getByRole, queryByRole } = render(<RegionsContainer />);

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region }));
        expect(queryByRole('button', { name: `${region}(V)` })).not.toBeNull();

        const unselectedRegions = regions.filter((item) => item !== region);
        unselectedRegions.forEach((unselectedRegion) => {
          expect(
            queryByRole('button', { name: unselectedRegion }),
          ).not.toBeNull();
        });
      });
    });
  });
});