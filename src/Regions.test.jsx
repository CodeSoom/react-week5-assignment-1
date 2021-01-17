import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../__fixtures__/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderRegions(selectedRegionName) {
    return render((
      <Regions
        regions={regions}
        onClick={handleClick}
        selectedRegionName={selectedRegionName}
      />
    ));
  }

  context('when region is selected', () => {
    const selectedRegionName = '서울';

    it("renders 'V' mark on the clicked button", () => {
      const { getByText } = renderRegions(selectedRegionName);

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  context('when region is not selected', () => {
    const selectedRegionName = '';

    it('renders buttons', () => {
      const { getByText } = renderRegions(selectedRegionName);

      regions.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });
  });

  context('click region button', () => {
    it('occurs onclick event', () => {
      const { getByText } = renderRegions();

      fireEvent.click(getByText(regions[0].name));

      expect(handleClick).toBeCalled();
    });
  });
});
