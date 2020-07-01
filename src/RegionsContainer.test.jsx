import React from 'react';

import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data';

jest.mock('react-redux');

describe('<RegionsContainer />', () => {
  context('render RegionsContainer', () => {
    it('shows regions', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
      }));

      const { queryByRole } = render(<RegionsContainer />);

      regions.forEach((region) => {
        expect(queryByRole('button', { name: region })).not.toBeNull();
      });
    });
  });

  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        selectRegion: '',
      }));

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
