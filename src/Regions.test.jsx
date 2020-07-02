import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixture__/data';

describe('<Regions />', () => {
  describe('render Regions', () => {
    context('without selectedRegion', () => {
      it('does not show a mark for a selected region ', () => {
        const { queryByRole } = render(
          <Regions regions={regions} selectedRegion="" />,
        );

        regions.forEach((region) => {
          expect(queryByRole('button', { name: region.name })).not.toBeNull();
        });
      });
    });

    context('with selectedRegion', () => {
      it('shows a mark for a selected region', () => {
        const { queryByRole } = render(
          <Regions regions={regions} selectedRegion="서울" />,
        );

        expect(queryByRole('button', { name: '서울(V)' })).not.toBeNull();
      });
    });
  });

  context('when the user selects region', () => {
    it('run handleSelectRegion', () => {
      const handleSelectRegion = jest.fn();

      const { getByRole } = render(
        <Regions regions={regions} onSelectRegion={handleSelectRegion} />,
      );

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region.name }));
      });
      expect(handleSelectRegion).toBeCalledTimes(regions.length);
    });
  });
});
