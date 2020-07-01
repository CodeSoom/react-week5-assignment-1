import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixture__/data';

describe('<Regions />', () => {
  describe('render Regions', () => {
    context('without newSelectRegion', () => {
      it('does not show a mark for a selected region ', () => {
        const { queryByRole } = render(
          <Regions regions={regions} newSelectRegion="" />,
        );

        regions.forEach((region) => {
          expect(queryByRole('button', { name: region.name })).not.toBeNull();
        });
      });
    });

    context('with newSelectRegion', () => {
      it('shows a mark for a selected region', () => {
        const { queryByRole } = render(
          <Regions regions={regions} newSelectRegion="서울" />,
        );

        expect(queryByRole('button', { name: '서울(V)' })).not.toBeNull();
      });
    });
  });

  // context('with a selected region', () => {
  //   it('run handleSelectRegion', () => {
  //     const handleSelectRegion = jest.fn();

  //     const { getByRole } = render(<Regions regions={regions} newSelectRegion="서울" onSelectRegions={handleSelectRegion} />);

  //     regions.forEach((region) => {
  //       fireEvent.click(getByRole('button', { name: region.name }));
  //     });
  //     expect(handleSelectRegion).toBeCalledTimes(regions.length);
  //   });
  // });
});
