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

  context('equals selectedRegionName and button text content', () => {
    const selectedRegionName = '서울';

    it("appends '(V)' button text content", () => {
      const { getByText } = renderRegions(selectedRegionName);

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  context('not equals selectedRegionName and button text content', () => {
    const selectedRegionName = '';

    it("appends '(V)' button text content", () => {
      const { getByText } = renderRegions(selectedRegionName);

      regions.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });
  });

  context('click region button', () => {
    const { getByText } = renderRegions();

    it('occurs onclick event', () => {
      fireEvent.click(getByText(regions[0].name));

      expect(handleClick).toBeCalled();
    });
  });
});
